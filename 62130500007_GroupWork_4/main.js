const app = {
  data() {
    
    return {
      image: [
        { no : 0,
          url: "images/1.jpg",
          title: "NSX",
          done: false,
        },
        { no : 1,
          url: "images/2.jpg",
            title: "Supra", 
            done: false },

        { no : 2,
          url: "images/3.jpg",
          title: "Skyline",
          done: false,
        },
      ],
      form: {
        text: "",
        search: false,
    },
      hasView: false,
        viewImg: '',
    };
  },
  methods: {
    toggleDone(image) {
        this.image[image.no].done = !this.image[image.no].done;
    },
    search() {
        this.form.search = !this.form.search;
    },
    toggleView(image) {
      this.viewImg = this.image[image.no].url;
      this.hasView = true;
    },
    cancel() {
        this.form.search = !this.form.search
        this.form.text = '';
    },
    close() {
        this.hasView = false;
    }  
},
computed: {
    countUndone() {
        return this.image.filter((t) => t.done).length;
    },
    searching() {
        return this.image.filter((member) => {
            return member.title.toLowerCase().includes(this.form.text.toLowerCase());
        });
    },
},
};
Vue.createApp(app).mount("#app");