# Guide för att använda sig av brancher med Git 

## Skapa en ny branch 

(Jag kommer använda mig av mitt namn för att namnge en branch, så där det står mattis så är det en branch som heter mattis)

### Smidigaste sättet
git checkout -b mattis
exempel git checkout -b mattis, det kommandot skapar och byter till den nya branchen mattis.

git checkout -b är ett kortkommando för git branch som man skapar en ny branch med och för git checkout som man byter branch med. 

### Utan kortkommando
git branch mattis
git checkout mattis

### Modernare sättet
git branch mattis 
git switch mattis 

## Ta bort en branch 
git branch -d mattis

# Pusha aldrig upp på master
## Pushad kod skall alltid ske i en egen branch 

# Klona alltid ned kod från master
För att klona ned kod och byta till din branch så är det simplaste sättet för oss att radera den gamla branchen och skapa en ny branch med samma namn. 

Exempel:

git branch -d mattis

git pull i master branchen

skapa en ny branch från master branchen

git checkout -b mattis

Genom att göra på det sättet så ser jag till att min branch är uppdaterad gentemot master. (Detta är inte ett optimalt arbetssätt för stora projekt men det funkar för oss)