function Guest(name, email, visitTime, phone) {
    this.name = name;
    this.email = email;
    this.visitTime = visitTime;
    this.phone = phone;
}

const g1 = new Guest('caleb', 'caleb@gmail.com', '10:30am', '555.555.5555');

if (false) {
    // Demo: Counter
    const counter = {
      count: 0,
      //   set: function(n) {
      //       this.count = n;
      //   }
      set(n) {
        this.count = n;
      },
  
      inc() {
        this.count += 1;
      },
  
      dec() {
        this.count -= 1;
      },
  
      now() {
        return this.count;
      }
    };
  }

const counter = {
    count: 0,
    step: 1,
    //   set: function(n) {
    //       this.count = n;
    //   }
    set(n) {
      this.count = n;
    },
  
    inc() {
      this.count += this.step;
    },
  
    dec() {
      this.count -= this.step;
    },
  
    now() {
      return this.count;
    }
  };
  