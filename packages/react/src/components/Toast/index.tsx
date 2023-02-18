import { colors } from '@ignite-ui-vitinho/tokens';
import { X } from 'phosphor-react';
import { ToastContainer, TextContainer } from './styles';

export interface ToastProps {
  title: string;
  subtitle?: string;
  closeToast: () => void;
  amountOfSecondsForCloseToast?: number;
}

export function Toast({ title, subtitle = "", closeToast, amountOfSecondsForCloseToast = 5 }: ToastProps) {

  setTimeout(()=>{
    if(typeof closeToast === 'function') closeToast(); 
  },amountOfSecondsForCloseToast * 1000)

  return (
    <ToastContainer>
      <TextContainer>
        <h3>{title}</h3>
        {!!subtitle && <span>{subtitle}</span>}
      </TextContainer>

      <X color={colors.gray200} style={{marginTop: '0.5rem', cursor: 'pointer'}} size={18} onClick={closeToast}/>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast';