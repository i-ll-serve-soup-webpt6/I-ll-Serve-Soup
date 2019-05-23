class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      this.tabItem =  new TabItem(this.itemElement);
      this.element.addEventListener('click', () => {
          this.select()
      });
      this.xBtn = document.querySelectorAll('.xBtn');
      this.element.addEventListener('click', ()=>{
        this.closeTab()
      });
  
    };
  
    select() {
      const links = document.querySelectorAll(".tabs-link").forEach(link => link.classList.remove('tabs-link-selected'));
      this.element.classList.toggle('tabs-link-selected');
      this.tabItem.select();
    }

    closeTab() {
      xBtn.addEventListener('click', (element) =>{
          this.element.classList.toggle('tabs-link-selected');
      });
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
    select() {
      const items = document.querySelectorAll('.tabs-item').forEach(item => item.classList.remove('tabs-item-selected'));
      this.element.classList.add('tabs-item-selected');
      selectedTab (this.element)
    }
  }
  
  let links = document.querySelectorAll(".tabs-link").forEach(tab => new TabLink(tab));

  const singIn = document.querySelector('.signInTab');
  singIn.addEventListener('click', (element) => {
    console.log("sign in button was clicked")
    window.location.href = "https://projects.invisionapp.com/share/Z6RLWHYRC2K#/screens";
  });
 let footer = document.querySelector('footer');
 let nav = document.querySelector('mainNav');
  function selectedTab (element) {
    footer.classList.add("activTabFooter");
    // console.log(nav)
    // nav.classList.add("activTabMainNav");
    
  }
  
 
  
