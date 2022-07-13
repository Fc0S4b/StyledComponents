import styled, { css } from 'styled-components';

export const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  display: block;
  margin: 1rem auto;
  ${({ large }) =>
    large
      ? css`
          padding: 1rem;
          font-size: 2.5rem;
          font-weight: 700;
        `
      : css`
          padding: 0.5rem;
          font-size: 1rem;
          font-weight: 400;
        `}/* si tuviese que aplicar css con la condición de que sea hacia la prop de large, tendría que configurar uno por uno en modo de funciones: la solución simplificada está arriba de este comentario */
        /* padding: ${({ large }) => large && '2rem'};
  width: 200px;
  font-weight: 400; */
`;

// extender clases de DefaultButton a nuevo componente HipsterButton que tiene otras propiedades adicionales
export const HipsterButton = styled(DefaultButton)`
  width: 150px;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
  padding: 1rem;
  display: inline-block;
  margin-right: 1rem;
  /* para el prop as = 'a' se debe configurar adicionalmente css para el elemento a que tiene por default otros estilos */
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
`;
