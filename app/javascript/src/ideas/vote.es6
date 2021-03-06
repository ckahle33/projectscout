import axios from "axios";

class Vote {
  constructor(el) {
    this.el       = el;
    this.url      = this.el.dataset.url;
    this.id       = this.el.dataset.id;
    this.count    = this.el.dataset.count;
    this.count_el = this.el.querySelector('span.count')
    this.setClickHandlers();
  }

  setClickHandlers() {
    this.el.addEventListener("click", ()=> {
      this.postVote();
      this.el.classList.toggle('toggled');
      this.toggle();
      this.toggleCount();
    })
  }

  postVote() {
    axios({
      url: this.url,
      method: 'post',
      data: { "idea":
        {"id": this.id}
      }
    })
    .then((data) => {
    })
    .catch((data) => {
    })
  }

  toggle() {
    if (this.el.dataset.toggled == "true") {
      this.el.dataset.toggled = "false"
    } else {
      this.el.dataset.toggled = "true"
    }
  }

  toggleCount() {
    var current = parseInt(this.count_el.innerHTML);
    if (this.el.dataset.toggled == "true") {
      this.count_el.innerHTML = ++current;
    } else {
      this.count_el.innerHTML = --current;
    }
  }

}


document.addEventListener("turbolinks:load", ()=> {
  let votes = document.querySelectorAll('[data-vote]');
  if (votes.length) {
    votes.forEach((el) => {
      new Vote(el);
    })
  }
});
