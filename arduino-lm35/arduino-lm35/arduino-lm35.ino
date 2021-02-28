#define TEMP_SENSOR 0
#define LED_RED 13
#define LED_GREEN 12

void setup() {
  Serial.begin(9600);
  pinMode(LED_RED, OUTPUT);
  pinMode(LED_GREEN, OUTPUT);
}
int signalVoltage, celsiusTemp;

void loop() {

  signalVoltage = analogRead(TEMP_SENSOR);

  celsiusTemp = (5 * signalVoltage * 100) / 1024;

  Serial.println(celsiusTemp);

  if(celsiusTemp > 22) {
    digitalWrite(LED_GREEN, LOW);
    digitalWrite(LED_RED,HIGH);
  }else {
    digitalWrite(LED_GREEN, HIGH);
    digitalWrite(LED_RED, LOW);
  }
  delay(500);
  }
