# Stilmall för hur vi skall skriva kod:

## CSS
Det skall finnas en global CSS fil som innehåller grund-designen. Denna fil skall också innehålla variabler för färger och spacing. 

### CSS för en komponent 
CSS för en komponent skall skrivas i en fil som importeras in i komponenten. Ex Button.css är css filen för Button.js komponenten. 

All CSS för komponenter skall skrivas med css klasser. Namngivelsen för klasserna skall följa BEM: https://css-tricks.com/bem-101/

## Filer och mappar
Alla mappar skall börjas med små bokstäver.
Exempel på mappnamn: components

Alla Filer med egen kod skall börja med Stor bokstav och sedan följa CamelCase.
Exempel på komponentnamn: Button.js

## Kod
Alla namngivelser skall vara beskrivande. Man skall kunna förstå vad en funktion gör genom att läsa namnet på funktionen. Samma för variabler.

### kommentarer
Kommentarer skall undvikas i största mån.

## Prettier
Prettier skall användas för att säkerställa att koden formateras på samma sätt.

## ES Lint 
ES Lint skall användas för att ge indikation på att kod har skrivits på ett inkorrekt sätt.