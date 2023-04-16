import styled from 'styled-components';

export const FormFild = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Container = styled.div`
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  margin: 0 auto;
`;

export const ContactsListSContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px gray;
  border-radius: 5px;
  width: 400px;
  margin: 0 auto;
  background-color: #f0f0f0;
`;

export const ListContacts = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: 'center';
  padding: 0px;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  outline: solid 1px gray;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
`;

export const DeleteButton = styled.button`
  height: 20px;
  background-color: #c0c0c0;
`;
