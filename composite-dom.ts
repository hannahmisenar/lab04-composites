interface IDomElement {
  print();
}

class DomElement {
 html = new TextNode('html');
 
}

class TextNode{
  private type;  
  constructor(type: string) {
    this.type = type;
  }
toString() {
  print(this.type);
}
}

}