const counter = {
    currentCount: 0,
    set: function(n){
        this.currentCount = n;
    },
    inc: function(n){
        this.currentCount++;
    },
    dec: function(n){
        this.currentCount--;
    },
    now: function(){
        console.log(this.currentCount)
    }
}

counter.now()
counter.inc()
counter.now()
counter.dec()
counter.now()

counter.set(100)
counter.now()