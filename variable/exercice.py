nombre1=input("entrer le premier nombre: ")
nombre2=input("entrer le deuxieme nombre: ")

if nombre1.isdigit() and nombre2.isdigit():
    nombre1=int(nombre1)
    nombre2=int(nombre2)
    print(f"le resultat de {nombre1} avec {nombre2} est égale à {nombre1*nombre2}")
else:
    print("saisie invalide")