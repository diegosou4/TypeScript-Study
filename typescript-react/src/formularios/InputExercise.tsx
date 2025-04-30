import React from "react";

function getForm() {
  const formField = ['nome', 'email', 'senha', 'cep', 'rua', 'numero', 'bairro', 'cidade', 'estado'];

  const FormFields: FormT[] = formField.map((field) => ({
    id: field,
    label: field.charAt(0).toUpperCase() + field.slice(1),
    type: field === 'senha' ? 'password' : 'text',
  }));

  return FormFields;
}

type FormT = {
  id: string;
  label: string;
  type: string;
};

type dados = {
  nome?: string;
  email?: string;
  senha?: string;
  cep?: string;
  rua?: string;
  numero?: number;
  bairro?: string;
  cidade?: string;
  estado?: string;
};

const InputExercise = () => {
  const [form, setForm] = React.useState<dados>({});

  const FormFields: FormT[] = getForm();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let response;
    let json;
    try {
      response = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        if (response.status === 403) {
          console.error('Erro 403: Acesso proibido');
        } else {
          console.error(`Erro HTTP ${response.status}`);
        }
        throw new Error('Deu ruim papai');
      }
      json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;
    setForm({ ...form, [id]: id === 'numero' ? Number(value) : value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {FormFields.map(({ id, label, type }: FormT) => (
          <div key={id}>
            <label htmlFor={id} className="text-xl">
              {label}
            </label>
            <input
              type={type}
              id={id}
              name={id}
              className="bg-white rounded-sm ml-2 border-1"
              value={form[id] || ''}
              onChange={handleChange}
            />
          </div>
        ))}
        <button className="bg-yellow-300 w-18 rounded-sm hover:bg-yellow-500 cursor-pointer mt-2 ml-3">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default InputExercise;