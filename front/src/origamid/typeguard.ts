async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleCursos(json);
  }
  fetchCursos();
  

  interface Curso {
    nome: string;
    horas: number;
    aulas: number;
    gratuito: boolean;
    tags: string[];
    idAulas: number[];
    nivel: 'iniciante' | 'avancado';
  }
  
  function isCurso(curso: unknown): curso is Curso {
    if (
      curso &&
      typeof curso === 'object' &&
      'nome' in curso &&
      'horas' in curso &&
      'tags' in curso
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  function handleCursos(data: unknown) {
    if (Array.isArray(data)) {
      data.filter(isCurso).forEach((item) => {
        document.body.innerHTML += `
          <div>
            <h2>${item.nome}</h2>
            <p>${item.horas}</p>
            <p>${item.tags.join(', ')}</p>
          </div>
        `;
      });
    }
  }

interface dadosApi {
    nome: string,
    horas: number,
    aulas: number,
    gratuito: boolean,
    tags: string[],
    idAulas: number[],
    nivel: 'iniciante' | 'avancado';
}