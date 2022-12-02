# APLICACIÓN DE PERSONAJES DE LA SERIE BREAKING BAD

## Tecnologías usadas
    - React (hooks)
    - SASS
    - CSS (flexbox)
    - Redux

## Funcionamiento
    - Aplicación que tiene un componente SearchBar que permite al usuario introducir datos de personajes para buscar. En el componente CardImage se hace la petición a la API de breaking bad y finalmente en el componente CardInfo se muestran los resultados en una card creada con SASS. 
    - En caso de que no se encuentren resultados se muestra No encontrado y si hay resultados se muestran estos.
    - Si el personaje ha muerto el status se muestra en rojo y si está vivo se muestra en verde.
    - Los state están gestionados mediante la librería de redux

## VISTA DESKTOP
![image](https://user-images.githubusercontent.com/88061350/205273743-eb30911d-4d25-4ec8-94ba-2240c26a69af.png)

## VISTA RESPONSIVE
![image](https://user-images.githubusercontent.com/88061350/205273925-6aa2d19f-2e6e-454e-81e1-822bb33d8240.png)
![image](https://user-images.githubusercontent.com/88061350/205274030-cc6b02ad-617f-4be9-a4e7-4685aefe4670.png)
