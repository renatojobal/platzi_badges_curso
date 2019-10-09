import React from 'react'


export default class CharacterPage extends React.Component { 
  state = {
    isModalOpen: false,
    imageURL: undefined,
    description: undefined
  }

  handleOpenModal = () => { 
    
  }
  
  render() { 
    const characters = []; // Lista de objetos como este {imageURL: http://....jpg, description: "Este personaje fue ..."}
    return (<ChildrenList characters={characters} onOpenModal={this.handleOpenModal}/>);
  }

}

export default class CharacterList extends React.Component { 
  render() { 
    return (<div>{this.props.character.map((item, index) => { return (<CharacterContainer imageURL={this.props.imageURL} description={this.props.description} onClick={this.props.onOpenModal}/>)})}</div>);
  }
}

export default class CharacterContainer extends React.Component { 
  render() { 
    return
  }
}


export default class Modal extends React.Component { 

}