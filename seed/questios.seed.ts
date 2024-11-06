import { CreateQuestionDto } from 'src/questions/dto/create-question.dto';

export const questionsReactSeed: CreateQuestionDto[] = [
  {
    text: 'Pregunta 1: ¿Qué es React?',
    subjectId: 'aac4f337-4177-4518-8a3e-0b5bd8b2301f',
    answers: [
      {
        text: 'Una librería de JavaScript para construir interfaces de usuario',
        isCorrect: true,
      },
      {
        text: 'Un framework completo para backend',
        isCorrect: false,
      },
      {
        text: 'Un lenguaje de programación',
        isCorrect: false,
      },
      {
        text: 'Una herramienta para diseño gráfico',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 2: ¿Cuál es el propósito de JSX en React?',
    subjectId: 'aac4f337-4177-4518-8a3e-0b5bd8b2301f',
    answers: [
      {
        text: 'Permite escribir estructuras HTML en JavaScript',
        isCorrect: true,
      },
      {
        text: 'Es una función para manejar estados',
        isCorrect: false,
      },
      {
        text: 'Es un tipo de archivo de configuración',
        isCorrect: false,
      },
      {
        text: 'Sirve para hacer pruebas en React',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 3: ¿Qué es un componente en React?',
    subjectId: 'aac4f337-4177-4518-8a3e-0b5bd8b2301f',
    answers: [
      {
        text: 'Una función o clase que representa una parte de la UI',
        isCorrect: true,
      },
      {
        text: 'Una base de datos de React',
        isCorrect: false,
      },
      {
        text: 'Un servicio externo que ayuda a React',
        isCorrect: false,
      },
      {
        text: 'Un archivo de configuración en JSON',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 4: ¿Qué método se usa para manejar el estado en un componente de clase?',
    subjectId: 'aac4f337-4177-4518-8a3e-0b5bd8b2301f',
    answers: [
      {
        text: 'this.setState()',
        isCorrect: true,
      },
      {
        text: 'this.setComponent()',
        isCorrect: false,
      },
      {
        text: 'this.updateState()',
        isCorrect: false,
      },
      {
        text: 'this.modifyState()',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 5: ¿Cuál es el hook para manejar el estado en un componente funcional?',
    subjectId: 'aac4f337-4177-4518-8a3e-0b5bd8b2301f',
    answers: [
      {
        text: 'useState',
        isCorrect: true,
      },
      {
        text: 'useContext',
        isCorrect: false,
      },
      {
        text: 'useEffect',
        isCorrect: false,
      },
      {
        text: 'useReducer',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 6: ¿Qué hook se utiliza para efectos secundarios en un componente?',
    subjectId: 'aac4f337-4177-4518-8a3e-0b5bd8b2301f',
    answers: [
      {
        text: 'useEffect',
        isCorrect: true,
      },
      {
        text: 'useState',
        isCorrect: false,
      },
      {
        text: 'useMemo',
        isCorrect: false,
      },
      {
        text: 'useCallback',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 7: ¿Qué es el virtual DOM en React?',
    subjectId: 'aac4f337-4177-4518-8a3e-0b5bd8b2301f',
    answers: [
      {
        text: 'Una representación ligera del DOM real que optimiza las actualizaciones',
        isCorrect: true,
      },
      {
        text: 'Un archivo de configuración de React',
        isCorrect: false,
      },
      {
        text: 'Un archivo de estilos de React',
        isCorrect: false,
      },
      {
        text: 'Una función de actualización de datos',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 8: ¿Cómo se pasan datos de un componente padre a un componente hijo?',
    subjectId: 'aac4f337-4177-4518-8a3e-0b5bd8b2301f',
    answers: [
      {
        text: 'Usando props',
        isCorrect: true,
      },
      {
        text: 'Usando useState',
        isCorrect: false,
      },
      {
        text: 'Usando el virtual DOM',
        isCorrect: false,
      },
      {
        text: 'Usando context API',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 9: ¿Qué hook se usa para manejar un contexto en React?',
    subjectId: 'aac4f337-4177-4518-8a3e-0b5bd8b2301f',
    answers: [
      {
        text: 'useContext',
        isCorrect: true,
      },
      {
        text: 'useState',
        isCorrect: false,
      },
      {
        text: 'useEffect',
        isCorrect: false,
      },
      {
        text: 'useMemo',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 10: ¿Cuál es el propósito de la key en una lista de elementos?',
    subjectId: 'aac4f337-4177-4518-8a3e-0b5bd8b2301f',
    answers: [
      {
        text: 'Ayudar a React a identificar y actualizar elementos correctamente',
        isCorrect: true,
      },
      {
        text: 'Hacer que la lista sea más rápida',
        isCorrect: false,
      },
      {
        text: 'Para manejar el estilo de la lista',
        isCorrect: false,
      },
      {
        text: 'Para sincronizar el estado entre componentes',
        isCorrect: false,
      },
    ],
  },
];

export const questionPhysicSeed: CreateQuestionDto[] = [
  {
    text: 'Pregunta 1: ¿Cuál es la unidad de medida de la fuerza en el Sistema Internacional?',
    subjectId: '49831875-ec9f-434c-8790-1a20cd3d9e6a',
    answers: [
      {
        text: 'Newton',
        isCorrect: true,
      },
      {
        text: 'Joule',
        isCorrect: false,
      },
      {
        text: 'Watt',
        isCorrect: false,
      },
      {
        text: 'Pascal',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 2: ¿Qué es la aceleración en física?',
    subjectId: '49831875-ec9f-434c-8790-1a20cd3d9e6a',
    answers: [
      {
        text: 'El cambio de velocidad de un objeto en el tiempo',
        isCorrect: true,
      },
      {
        text: 'La cantidad de masa de un objeto',
        isCorrect: false,
      },
      {
        text: 'La distancia total recorrida por un objeto',
        isCorrect: false,
      },
      {
        text: 'El impulso de un cuerpo en movimiento',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 3: ¿Cuál es la fórmula de la segunda ley de Newton?',
    subjectId: '49831875-ec9f-434c-8790-1a20cd3d9e6a',
    answers: [
      {
        text: 'F = m * a',
        isCorrect: true,
      },
      {
        text: 'F = m / a',
        isCorrect: false,
      },
      {
        text: 'F = m + a',
        isCorrect: false,
      },
      {
        text: 'F = m - a',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 4: ¿Qué describe la ley de gravitación universal?',
    subjectId: '49831875-ec9f-434c-8790-1a20cd3d9e6a',
    answers: [
      {
        text: 'La fuerza de atracción entre dos cuerpos con masa',
        isCorrect: true,
      },
      {
        text: 'La aceleración de un objeto en caída libre',
        isCorrect: false,
      },
      {
        text: 'El movimiento de los planetas en torno al sol',
        isCorrect: false,
      },
      {
        text: 'La relación entre velocidad y tiempo',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 5: ¿Qué es la energía cinética?',
    subjectId: '49831875-ec9f-434c-8790-1a20cd3d9e6a',
    answers: [
      {
        text: 'La energía de un objeto debido a su movimiento',
        isCorrect: true,
      },
      {
        text: 'La energía almacenada en un objeto en reposo',
        isCorrect: false,
      },
      {
        text: 'La energía resultante de una reacción química',
        isCorrect: false,
      },
      {
        text: 'La energía generada por un campo magnético',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 6: ¿Qué es el trabajo en términos físicos?',
    subjectId: '49831875-ec9f-434c-8790-1a20cd3d9e6a',
    answers: [
      {
        text: 'La fuerza aplicada a un objeto por la distancia que se desplaza',
        isCorrect: true,
      },
      {
        text: 'El cambio de temperatura en un objeto',
        isCorrect: false,
      },
      {
        text: 'La resistencia de un material al calor',
        isCorrect: false,
      },
      {
        text: 'El impulso en una dirección',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 7: ¿Cuál es la fórmula para calcular la energía potencial gravitacional?',
    subjectId: '49831875-ec9f-434c-8790-1a20cd3d9e6a',
    answers: [
      {
        text: 'E = m * g * h',
        isCorrect: true,
      },
      {
        text: 'E = m * g / h',
        isCorrect: false,
      },
      {
        text: 'E = m / (g * h)',
        isCorrect: false,
      },
      {
        text: 'E = m * g + h',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 8: ¿Qué es la velocidad de la luz en el vacío?',
    subjectId: '49831875-ec9f-434c-8790-1a20cd3d9e6a',
    answers: [
      {
        text: 'Aproximadamente 300,000 km/s',
        isCorrect: true,
      },
      {
        text: 'Aproximadamente 150,000 km/s',
        isCorrect: false,
      },
      {
        text: 'Aproximadamente 1,000 km/s',
        isCorrect: false,
      },
      {
        text: 'Aproximadamente 30,000 km/s',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 9: ¿Qué mide la magnitud física conocida como potencia?',
    subjectId: '49831875-ec9f-434c-8790-1a20cd3d9e6a',
    answers: [
      {
        text: 'La cantidad de trabajo realizado por unidad de tiempo',
        isCorrect: true,
      },
      {
        text: 'La cantidad de energía almacenada en un objeto',
        isCorrect: false,
      },
      {
        text: 'La distancia recorrida por unidad de tiempo',
        isCorrect: false,
      },
      {
        text: 'La fuerza aplicada en una dirección',
        isCorrect: false,
      },
    ],
  },
  {
    text: 'Pregunta 10: ¿Qué es el impulso en física?',
    subjectId: '49831875-ec9f-434c-8790-1a20cd3d9e6a',
    answers: [
      {
        text: 'El producto de la fuerza aplicada y el tiempo durante el cual se aplica',
        isCorrect: true,
      },
      {
        text: 'La distancia recorrida por un objeto en movimiento',
        isCorrect: false,
      },
      {
        text: 'La fuerza gravitacional que actúa sobre un objeto',
        isCorrect: false,
      },
      {
        text: 'La velocidad de un objeto en un punto específico',
        isCorrect: false,
      },
    ],
  },
];
