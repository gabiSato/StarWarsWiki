import React, { Component } from 'react';
import axios from 'axios';
import { NavigationScreenProps } from 'react-navigation';

import MainContainer from '../components/MainContainer';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';

type Props = NavigationScreenProps & {};

class Main extends Component<Props> {
    
  static navigationOptions = {
    title: "Star Wars Wiki",
  };

  //guarda a entrada de texto da caixa de pesquisa
  state = { search: '', result: {} };

  //faz a conexão com a api em busca de um resultado para a pesquisa
  //retorna a tela de detalhes do personagem passando como parametro os dados de resultado da pesquisa
  searchPerson =  async () => {
    const response = await axios.get(`https://swapi.co/api/people/?search=${this.state.search}`);
    const result = response.data.results[0];
    this.setState({ result: result });
    return this.props.navigation.navigate("PersonDetail", { result });
  };

  render() {
    return (
      <MainContainer>
        <SearchBar 
          placeholder="Digite o nome do personagem..."
          value={this.state.search} 
          onChangeText={search => this.setState({ search })} 
        />
        <Button 
          onPress={this.searchPerson} 
          name={"Pesquisar"}
        />
      </MainContainer>
    );
  }
}

export default Main;