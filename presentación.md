Estructura de la Presentación
Diapositiva 1: Título

Título del Paper: User Welfare Optimization in Recommender Systems with Competing Content Creators 


Autores: Fan Yao, Yiming Liao, Mingzhe Wu, et al. 


Conferencia/Fuente: arXiv, 2024 

Tu Nombre y Curso: [Tu Nombre], Seminario IIC3633 - Sistemas Recomendadores

(Qué decir: Presentación formal. Menciona el título, los autores principales y dónde fue publicado. Preséntate.)

Diapositiva 2: Agenda de la Presentación
Puntos a tratar:

Contexto: La Economía de Creadores y sus Desafíos.

Problema: ¿Por qué el bienestar del usuario se degrada?

Estado del Arte y Contribución: ¿Qué se ha hecho y qué aporta este paper?

Solución Propuesta: El juego C 
ext
3
​
  y los mecanismos de intervención.

Evaluación: Experimentos Offline y Online.

Conclusiones y Discusión.

(Qué decir: "En esta presentación, primero estableceremos el contexto del problema, luego definiremos formalmente el desafío que aborda el paper, revisaremos trabajos previos y las contribuciones clave de esta investigación, profundizaremos en la solución técnica, analizaremos los resultados experimentales y finalizaremos con las conclusiones.")

Diapositiva 3: Contexto del Problema (Rúbrica: 3 pts)
Título: El Ecosistema de las Plataformas de Contenido


Punto 1: La Economía de Creadores. Las plataformas online (TikTok, YouTube, etc.) son un campo de batalla económico para los creadores de contenido, que compiten por ingresos y visibilidad.


Punto 2: El Dilema de la Plataforma. El objetivo principal de la plataforma es maximizar el bienestar del usuario (calidad y volumen de interacciones), lo cual está ligado a sus propios ingresos.


Punto 3: El Efecto Bucle. Las estrategias de recomendación de la plataforma influyen en lo que los creadores deciden producir a continuación, alterando el ecosistema de contenido. Este ciclo a menudo se ignora en el diseño de algoritmos.


Sugerencia Visual: Un diagrama simple que muestre un ciclo: Plataforma recomienda -> Usuario interactúa -> Creador recibe señal y produce -> Nuevo contenido para la plataforma.

(Qué decir: "Vivimos en la era de la 'economía de creadores', donde millones compiten en plataformas como TikTok o YouTube. El éxito de estas plataformas depende de mantener a los usuarios felices, lo que llamamos 'bienestar del usuario'. Sin embargo, hay un problema: lo que la plataforma recomienda hoy, dicta lo que los creadores producirán mañana, creando un ciclo que puede ser perjudicial si no se gestiona bien.")

Diapositiva 4: El Problema: Competencia Míope y Asimetría de Información
Título: ¿Por Qué Falla el Ecosistema?


Causa Principal: Los creadores tienden a perseguir tendencias y enfocarse en los grupos de usuarios mayoritarios. ¿Por qué? Porque tienen una visión miope y local; no conocen la distribución global de preferencias de todos los usuarios.



Consecuencia: Esto lleva a una falta de diversidad de contenido. Los grupos de usuarios "nicho" o minoritarios quedan desatendidos, lo que resulta en un bienestar de usuario subóptimo para el ecosistema en general.


El Rol de la Plataforma: El paper argumenta que no es culpa del creador, sino responsabilidad de la plataforma usar su ventaja informativa para guiar a los creadores hacia donde más se les necesita.



Sugerencia Visual: Usar una versión simplificada de la Figura 1 (izquierda) del paper. Mostrar varios puntos de usuarios y cómo los "creadores" (puntos de colores) se agrupan en el centro, dejando los extremos desatendidos.

(Qué decir: "El problema central es que los creadores, buscando maximizar sus ganancias, se enfocan en lo que es popular. Esto ocurre porque no tienen la visión completa del mercado que sí tiene la plataforma. Como resultado, muchos usuarios con gustos específicos son ignorados, y el bienestar general disminuye. Este paper postula que la plataforma debe intervenir para corregir esta 'falla de mercado'.")

Diapositiva 5: Estado del Arte y Contribución (Rúbrica: 3+3 pts)
Título: ¿Qué se ha hecho y qué aporta este trabajo?

Estado del Arte (Trabajos Relacionados):

Existen modelos teóricos de juegos para estas interacciones (e.g., Ben-Porat & Tennenholtz, 2017).

Otros trabajos proponen incentivos o contratos de pago para los creadores (e.g., Zhu et al., 2023).


Limitación Clave: Muchos de estos trabajos asumen que los creadores son perfectamente racionales y capaces de encontrar un equilibrio óptimo (Equilibrio de Nash), lo cual es poco realista.

Contribuciones de este Paper:


Formaliza el problema en un entorno competitivo sin asumir racionalidad perfecta, usando un concepto más práctico de "Equilibrio Local de Nash".



Propone 3 mecanismos de intervención prácticos (UIR, SMT, HMT) que la plataforma puede usar para guiar a los creadores, ajustando recompensas o probabilidades de matching.


Valida la solución de manera robusta con simulaciones offline y, crucialmente, con un experimento online A/B de 3 semanas en una plataforma líder de videos cortos.


(Qué decir: "Investigaciones previas han modelado este problema, pero a menudo parten de supuestos muy fuertes sobre el comportamiento de los creadores. La gran contribución de este paper es triple: primero, modela un escenario más realista; segundo, diseña tres mecanismos de intervención concretos y fáciles de implementar; y tercero, demuestra que funcionan no solo en teoría, sino en un entorno de producción real con millones de usuarios.")

Diapositiva 6: Formalización del Problema (Rúbrica: 5 pts)
Título: El Juego de la Competencia de Creadores (C 
ext
3
​
 )


Concepto: Se modela la interacción como un juego estratégico llamado C 
ext
3
​
 .

Componentes Clave (explicar de forma intuitiva):


Jugadores: n creadores de contenido.


Acciones (s 
i
​
 ): El tipo de contenido que un creador i decide producir (representado como un vector).


Relevancia (σ(s,x)): Qué tan bueno es un contenido s para un usuario x.


Función de Matching: La plataforma muestra a cada usuario el contenido del top-K más relevante, y elige uno mediante una distribución Softmax (esto da más probabilidad a los más relevantes).


Utilidad del Creador (u 
i
​
 (s)): La ganancia esperada de un creador, que depende de la probabilidad de ser "matcheado" a un usuario y la recompensa que la plataforma le da por ello.

Comportamiento del Creador: Se asume que los creadores no son genios estratégicos. Simplemente hacen pequeños cambios locales para ver si su utilidad mejora, un proceso llamado Local Better Response (LBR).

(Qué decir: "Para analizar esto, los autores lo modelan como un juego. Piensen en los creadores como jugadores, y su estrategia es el tipo de contenido que producen. La plataforma actúa como el 'tablero', decidiendo qué contenido mostrar a qué usuario. La ganancia de un creador depende de cuánta visibilidad y recompensa obtiene. Crucialmente, los creadores aprenden por prueba y error, haciendo pequeños ajustes a su contenido.")

Diapositiva 7: Detalle de la Solución (Parte 1): La Idea Central (Rúbrica: 12 pts)
Título: La Solución: Intervenir para Guiar

La Idea: Si los creadores se agrupan en torno a usuarios "populares", la plataforma debe hacer que los usuarios "desatendidos" parezcan más atractivos. ¿Cómo? Aumentando su importancia percibida.


El Mecanismo: La plataforma asigna un peso de importancia (w(x)) a cada usuario (o grupo de usuarios).

La Dinámica:

La plataforma observa qué usuarios están siendo mal atendidos (tienen baja utilidad).

Aumenta el peso w(x) de esos usuarios desatendidos.

Este peso se usa para modificar la utilidad que los creadores perciben.

Los creadores, al buscar mejorar su utilidad, ahora tienen un incentivo para moverse hacia esos usuarios que antes eran ignorados.


Sugerencia Visual: Usar la Figura 1 (derecha) del paper. Mostrar cómo, al "bajar el peso" del usuario central, los creadores se redistribuyen para cubrir a los otros usuarios.

(Qué decir: "La solución es elegante. La plataforma va a actuar como un guía, 'iluminando' a los usuarios que necesitan más atención. Esto lo hace asignando un peso a cada usuario. Si un grupo de usuarios no recibe buen contenido, la plataforma aumenta su peso, haciendo que sea más rentable para los creadores producir contenido para ellos.")

Diapositiva 8: Detalle de la Solución (Parte 2): Los 3 Mecanismos
Título: Tres Formas de Intervenir

Mecanismo 1: User Importance Reweighting (UIR)


Cómo funciona: Se multiplica directamente la recompensa post-matching por el peso w(x).


En simple: "Si produces contenido para este usuario desatendido, te pago más".

Mecanismo 2: Soft Matching Truncation (SMT)

Cómo funciona: Se ajusta la temperatura del Softmax en el matching. Un peso w(x) más alto hace la selección "más suave" o aleatoria dentro del top-K.



En simple: "Para este usuario desatendido, le daré una oportunidad a más creadores de tu lista de finalistas, no solo al súper estrella".

Mecanismo 3: Hard Matching Truncation (HMT)

Cómo funciona: Se ajusta el número de candidatos K en el top-K. Un peso w(x) más alto aumenta K.


En simple: "Para este usuario desatendido, en lugar de mirar a los 20 mejores creadores, miraré a los 50 mejores, ampliando la piscina de contenido".

Sugerencia Visual: Un cuadro comparativo simple de los 3 mecanismos.

(Qué decir: "La plataforma puede implementar esta idea de tres maneras. Con UIR, simplemente paga más. Con SMT y HMT, manipula el algoritmo de recomendación: SMT hace la competencia en el top más equitativa, y HMT amplía el número de competidores. HMT es especialmente práctico porque solo requiere cambiar un parámetro en el sistema.")

Diapositiva 9: Detalle de la Solución (Parte 3): Actualización Adaptativa
Título: ¿Cómo se calculan los pesos? Algoritmo Adaptativo


El Algoritmo: Se usa un enfoque de Actualización Multiplicativa de Pesos (Multiplicative Weight Update).


La Fórmula Clave: w 
(t+1)
 (x)∝w 
(t)
 (x)⋅exp(−α 
π
ˉ
 (x)).

Intuición:

π
ˉ
 (x) es la utilidad promedio que el usuario x está recibiendo.

Si un usuario x está muy satisfecho (  
π
ˉ
 (x) es alto), su peso w(x) disminuye para la siguiente ronda.

Si un usuario x está insatisfecho (  
π
ˉ
 (x) es bajo), su peso w(x) aumenta.

Proceso Práctico (Algoritmo 1): El tiempo se divide en épocas. En cada época, la plataforma despliega los pesos, observa la utilidad de los usuarios, y luego usa la fórmula para actualizar los pesos para la siguiente época.


(Qué decir: "La 'magia' está en cómo se actualizan estos pesos. Es un proceso dinámico. La plataforma constantemente mide qué tan felices están los diferentes grupos de usuarios. A los grupos que están menos felices, se les aumenta el peso para la siguiente ronda, y viceversa. Es un sistema que se auto-corrige continuamente.")

Diapositiva 10: Evaluación (Parte 1): Experimentos Offline (Rúbrica: 10 pts)
Título: Pruebas en Simulación: Datos Sintéticos y MovieLens

Entornos:


Sintético: Crearon un mundo artificial con grupos de usuarios de tamaños muy diferentes (mayorías y minorías claras) para simular el "pastoreo" de creadores.



MovieLens-1M: Usaron datos reales de recomendación de películas.


Resultados Clave (Figura 2):


Rendimiento: Los 3 mecanismos (UIR, SMT, HMT) superan consistentemente a la línea base (no intervención) en bienestar total del usuario.


"Doble Ascenso": Las curvas de bienestar primero se estancan y luego vuelven a subir, demostrando que el sistema logra "desatascar" a los creadores de los equilibrios subóptimos.


El Ganador: HMT muestra la mayor ganancia y la menor varianza, siendo el más estable y efectivo.


Equidad: Los mecanismos logran aumentar la utilidad de los grupos minoritarios, a veces a un pequeño costo para los grupos mayoritarios, pero logrando un resultado global mejor.

Sugerencia Visual: Mostrar el gráfico (a) User welfare evolving curve de la Figura 2. Resaltar la línea de HMT y el patrón de "doble ascenso".

(Qué decir: "Antes de probarlo en el mundo real, lo simularon. Tanto con datos artificiales como con los datos de MovieLens, los resultados fueron claros: los tres mecanismos mejoran significativamente el bienestar del usuario. HMT fue el mejor, mostrando no solo la mayor mejora, sino también la mayor estabilidad.")

Diapositiva 11: Evaluación (Parte 2): Experimento Online (A/B Test)
Título: La Prueba de Fuego: Experimento en una Plataforma Real


Contexto: Un A/B test de 3 semanas en una de las plataformas de videos cortos más grandes del mundo.


Mecanismo Elegido: HMT, por su gran rendimiento offline y su facilidad de implementación (solo es cambiar el número de candidatos a recuperar).


Métrica de Utilidad: "Like-Through-Rate" (LTR), es decir, la proporción de likes por impresión.

Configuración: Un test A/B simétrico. 3% de usuarios y 3% de creadores en el grupo de control (sin cambios) y 3% de cada uno en el grupo de experimento (con HMT), asegurando que no hubiera contaminación entre grupos.

Sugerencia Visual: Un diagrama simple que muestre el Grupo A (Control) y el Grupo B (Experimento con HMT), cada uno en su "burbuja" aislada.

(Qué decir: "Aquí viene lo más impresionante. Probaron esto en el mundo real. Durante 3 semanas, en una app que todos conocemos, aplicaron el mecanismo HMT a un grupo de millones de usuarios y creadores, y lo compararon con un grupo de control.")

Diapositiva 12: Resultados del Experimento Online
Título: ¡Resultados Positivos y Estadísticamente Significativos!

Para los Usuarios:


+1.13% en LTR (satisfacción del usuario).


+0.76% en impresiones de contenido nuevo ("cold-start").


+0.71% en diversidad (número de temas distintos consumidos por usuario).

Los grupos de usuarios más pequeños vieron las mayores ganancias en LTR, validando la hipótesis.

Para los Creadores:


+0.17% en usuarios activos diarios para creadores populares, mostrando una tendencia creciente a lo largo de las 3 semanas.

Conclusión del Experimento: El mecanismo no solo mejora el bienestar y la diversidad para los usuarios, sino que también tiene un impacto positivo en el engagement de los creadores.

(Qué decir: "Los resultados fueron un éxito. La satisfacción de los usuarios aumentó, vieron contenido más diverso y fresco, y los más beneficiados fueron justamente los grupos de nicho que estaban desatendidos. Además, los creadores también se vieron beneficiados, con un aumento en su audiencia activa. Esto demuestra que alinear los incentivos beneficia a todo el ecosistema.")

Diapositiva 13: Conclusiones y Trabajo Futuro (Rúbrica: Preguntas)
Título: Conclusiones y Discusión

Resumen:

La competencia miope de los creadores, causada por la asimetría de información, degrada el bienestar del usuario en las plataformas.

La plataforma puede (y debe) intervenir para solucionar esto, guiando a los creadores hacia usuarios desatendidos.

Mecanismos como UIR, SMT, y HMT, basados en re-ponderación adaptativa de la importancia del usuario, son efectivos.

HMT demostró ser una solución práctica, estable y de alto impacto tanto en simulaciones como en un entorno de producción masivo.

Trabajo Futuro (mencionado en el paper):

Analizar más a fondo los pros y contras de cada mecanismo para diferentes contextos.

Incorporar restricciones de presupuesto de la plataforma.

Asegurar explícitamente la equidad (fairness) no solo para usuarios sino también para creadores.

(Qué decir: "En conclusión, este trabajo identifica un problema fundamental en las plataformas de contenido y propone una solución elegante, práctica y probada. Demuestra que es posible crear un ecosistema más saludable y diverso al guiar sutilmente a los creadores. Como trabajo futuro, se podría explorar cómo optimizar estos mecanismos bajo restricciones de presupuesto o con garantías de equidad aún más fuertes.")

Diapositiva 14: Referencias Clave (Rúbrica: 2 pts)
Título: Referencias Clave

Citar 3-4 papers importantes que contextualizan el trabajo:

Yao et al. (2023a). How bad is top-k recommendation under competing content creators? (El trabajo previo de los mismos autores que introdujo el framework C³). 


Ben-Porat and Tennenholtz (2017, 2018). A game-theoretic approach to recommendation systems... (Trabajo seminal en la aplicación de teoría de juegos a recomendadores). 


Arora, Hazan, and Kale (2012). The multiplicative weights update method... (El paper clásico sobre el algoritmo de actualización de pesos utilizado). 

Diapositiva 15: Gracias y Preguntas (Rúbrica: 10 pts)
Título: ¡Gracias!

Subtítulo: ¿Preguntas?

(Prepárate para responder)