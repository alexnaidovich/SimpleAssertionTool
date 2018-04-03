class Assert {
    
    constructor(id, name) {
        this.el = document.getElementById(id);
        this.h2 = this.el.appendChild(document.createElement('h2'));
        this.h2.innerText = name;
        this.ul = this.el.appendChild(document.createElement('ul'));
    }
    
    assert(statement, message) {
        let el = this.el, ul = this.ul;
        let assertMessage = ul.appendChild(document.createElement('li'));
        assertMessage.innerText = message;
        
        if (statement) {
            assertMessage.classList.add('pass');
        } else {
            assertMessage.classList.add('fail');
        }
    }
    
}