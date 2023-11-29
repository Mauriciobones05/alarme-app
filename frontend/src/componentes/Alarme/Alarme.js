import React, { useState, useEffect } from 'react';
import SomAlarme from '/Dev/alarme-app/frontend/src/assets/som-alarme/alarme.mp3';
import Modal from 'react-modal';

const Alarme = () => {
  const [agora, setAgora] = useState(new Date());
  const [horaAlarme, setHoraAlarme] = useState(null);
  const [horaInput, setHoraInput] = useState('');
  const [alarmeAtivo, setAlarmeAtivo] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);

  const [audio] = useState(new Audio(SomAlarme));

  useEffect(() => {
    const timer = setInterval(() => {
      setAgora(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (horaAlarme && agora >= horaAlarme && !alarmeAtivo) {
      // Exiba o modal quando o alarme é acionado
      setModalAberto(true);
      audio.play();
      setAlarmeAtivo(true); // Desativa o alarme após disparado
    }
  }, [agora, horaAlarme, alarmeAtivo, audio]);

  const definirAlarme = () => {
    const novaHoraAlarme = new Date();
    const [horas, minutos] = horaInput.split(':');
    novaHoraAlarme.setHours(horas, minutos, 0);
    setHoraAlarme(novaHoraAlarme);
    setAlarmeAtivo(false); // Reativa o alarme
    setHoraInput('');
  };

  const fecharModal = () => {
    setModalAberto(false);
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
        <p style={{ color: 'white', font: 'arial', marginTop: '30px', textAlign: 'center' }}>
          Alarme Ativado: {horaAlarme.toLocaleTimeString()}
        </p>
      )}

      {/* Componente Modal */}
      <Modal
        isOpen={modalAberto}
        onRequestClose={fecharModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            width: '300px',
            height: '150px',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#05445E',
            borderRadius: '10px',
            fontSize: 'larger',
            color:'white'
          },
        }}
      >
        <p>Alarme Acionado!</p>
        <button onClick={fecharModal}>OK</button>
      </Modal>
    </div>
  );
};

export default Alarme;