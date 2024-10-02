#include <Keypad.h>  // Biblioteca para o funcionamento do teclado de membrana

int position = 0;          // Variável para leitura de posição da tecla pressionada
const byte ROWS = 4;       // Número de linhas do teclado
const byte COLS = 4;       // Número de colunas do teclado
char keys[ROWS][COLS] = {  // Declaração dos números, letras e caracteres do teclado
  {'1','4','7','*'},
  {'2','5','8','0'},
  {'3','6','9','#'},
  {'A','B','C','D'}
};
String password = "7777";    // Senha correta para destrancar a fechadura
String digitado = "";
byte rowPins[ROWS] = { 13, 7, 8, 9 }; // Pinos de conexão das linhas do teclado
byte colPins[COLS] = { 10, 3, 4, 5 }; // Pinos de conexão das colunas do teclado

// Objeto Keypad para leitura das teclas
Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

int ledVermelho = 12;  // Pino em que está conectado o LED vermelho
int ledVerde = 11;     // Pino em que está conectado o LED verde
int rele = 6;          // Pino em que está conectado o relé

void setup() {
  pinMode(ledVermelho, OUTPUT);    // Declara o pino como saída
  pinMode(ledVerde, OUTPUT);   
  pinMode(rele, OUTPUT); 
  Serial.begin(115200);
}

void loop() {
  char key = keypad.getKey();      // Leitura das teclas pressionadas
  if (key) {
    digitado += key;
    if (key == 'D') {
      digitado = "";
      Serial.println("Limpo");
    }
    if (digitado.length() == 4) {
      if (digitado == password) {
        Serial.println("Senha correta!");
        digitalWrite(ledVerde, HIGH);
        digitalWrite(rele, LOW); // Ativa o relé
        delay(2000);
        digitalWrite(rele, HIGH); // Desativa o relé
        digitalWrite(ledVerde, LOW);
        digitado = "";
      } else {
        Serial.println("Errou tente novamente");
        digitado = "";
        digitalWrite(ledVermelho, HIGH);
        delay(2000);
        digitalWrite(ledVermelho, LOW);
      }
    } else {
      Serial.println(digitado);
    }
  }
}