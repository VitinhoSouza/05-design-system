import { styled } from '../../styles'

export const ToastContainer = styled('div', {
    padding: '$3 $5',
    maxWidth: '22.5rem',
    borderRadius: '6px',

    display: 'flex',
    justifyContent: 'space-between',

    backgroundColor: '$gray800',
    fontFamily: '$default',

    'h3':{
        lineHeight: '0',
        fontWeight: 700,
        fontSize: '$xl',
        color: '$white'
    },

    'span':{
        fontSize: '$sm',
        color: '$gray200'
    }
})

export const TextContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '$1',
})