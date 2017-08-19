
describe('Test Framework', () => {

  it('is working', () => {
    expect(1).toBe(1);
  });

});

class ToDoList{

  constructor(){
    this.items = [];
  }

  add(item){
    this.items.push(item);
  }

  hasItem(item){
    for(var i = 0; i < this.items.length; i++){
      if (this.items[i] === item) return true;
    }
    return false;
  }

}

class ToDoItem{
  constructor(label){
    this._label = label;
    this._completed = false;
  }
  complete(){
    this._completed = true;
  }
  get label() { return this._label; }
  get completed() { return this._completed; }
}

describe('Todo App', () => {

  it('exists', () =>{
    expect(ToDoList).toBeDefined();
  });

  let toDo;
  beforeEach(()=>{
    toDo = new ToDoList()
  });

  describe('Item Class', () =>{

    it('exists', ()=>{
      expect(ToDoItem).toBeDefined();
    });

    let newItem;
    beforeEach(()=>{
      newItem = new ToDoItem('item');
    });

    describe('Add Item', ()=>{

      it('exists', ()=>{
        expect(toDo.add).toBeDefined();
      });

      it('adds an item', ()=>{
        toDo.add(newItem);
        expect(toDo.items.length).toEqual(1);
      });

      it('adds the correct item', ()=>{
        toDo.add(newItem);
        expect(toDo.items[0]).toBe(newItem);
      });

    });

    describe('Complete Item', ()=>{

      it('exists', ()=>{
        expect(newItem.complete).toBeDefined();
      });

      it('marks complete', ()=>{
        let item = new ToDoItem('test complete');
        toDo.add(item);
        item.complete();
        expect(toDo.items[0].completed).toBe(true);
      });

      it('marks correct item complete', ()=>{
        let item = new ToDoItem('test complete');
        toDo.add(item);
        item.complete();
        let completedItem = toDo.items[0];
        expect(completedItem).toBe(item);
        expect(completedItem.completed).toBe(true);
      });
    
    });

  });

});

