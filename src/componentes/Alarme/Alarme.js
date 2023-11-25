import React, { useState, useEffect } from 'react';

const Alarme = () => {
  const [agora, setAgora] = useState(new Date());
  const [horaAlarme, setHoraAlarme] = useState(null);
  const [horaInput, setHoraInput] = useState('');
  const [alarmeAtivo, setAlarmeAtivo] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAgora(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (horaAlarme && agora >= horaAlarme && !alarmeAtivo) {
      alert('Alarme!!!');
      setAlarmeAtivo(true); // Desativa o alarme após disparado
    }
  }, [agora, horaAlarme, alarmeAtivo]);

  const definirAlarme = async() => {
    const novaHoraAlarme = new Date();
    const [horas, minutos] = horaInput.split(':');
    novaHoraAlarme.setHours(horas, minutos, 0);
    setHoraAlarme(novaHoraAlarme);
    setAlarmeAtivo(false); // Reativa o alarme
    try {
      const response = await fetch('http://localhost:3001/alarme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ novaHoraAlarme }),
      });

      if (response.status === 201) {
         console.log('Alarme ativado');

      } else if (response.status === 400) {
        console.log('Erro ao ativar alarme');
      } else {
        console.log('Erro ao ativar alarme');
      }
    } catch (error) {

    }
  };
  return (
    <div>
      <p style={{ color: 'white', font: 'arial', textAlign: 'center' }}>
        Agora: {agora.toLocaleTimeString()}
      </p>
  
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          style={{
            width: '40vw',
            height: '5vh',
            marginLeft: '40px',
            borderRadius: '10px',
            background: '#0E7A8F',
            fontSize: '40px',
            marginTop: '40px',
            color: 'white',
          }}
          type="time"
          value={horaInput}
          onChange={(e) => setHoraInput(e.target.value)}
        />
  
        <button
          style={{
            width: '40vw',
            height: '8vh',
            background: '#05445E',
            color: 'white',
            font: 'arial',
            marginTop: '25px', 
            fontSize: 'larger',
            borderRadius: '12px',            
          }}
          onClick={definirAlarme}
        >
          Definir Alarme
        </button>
      </div>
  
      {horaAlarme && (
        <p style={{ color: 'white', font: 'arial',marginTop:'30px',textAlign: 'center' }}>
          Alarme Ativado: {horaAlarme.toLocaleTimeString()}
        </p>
      )}
    </div>
  );  
};

export default Alarme;