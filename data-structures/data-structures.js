// Stack supports LAST IN FIRST OUT pattern


// constructor function: 
function Stack() {
// binding keyword this 
//  this = Object.create();
// var items = container for Stack
  var items = [];
  this.push = function(element) {
    return items.push(element);
  };
  
  this.pop = function() {
    return items.pop();
  };
  
  this.peek = function() {
    return items[items.length - 1];
  };
  
  this.isEmpty = function() {
    return items.length === 0;
  };
  
  this.length = function() {
    return items.length;
  };
  
  this.clear = function() {
    items = [];
  };
  
  this.print = function() {
    console.log(items.toString());
  };
}

module.exports.Stack = Stack;

// Queue: FIRST ONE IN FIRST ONE OUT pattern
function Queue() {
    var items = [];
    this.enqueue = function(element) {
        return items.push(element);
    };
    
    
    this.dequeue = function() {
        return items.shift();
    };
    
    this.front = function() {
        return items[0];
    };
    
    this.empty = function () {
        return items.length === 0;
    };
    
    this.clear = function () {
        items = [];
    };
    
    this.length = function () {
        return items.length;
    };
    
    this.print = function () {
        console.log(items.toString());
    };
}
module.exports.Queue = Queue;


// Queue: FIRST ONE IN FIRST ONE OUT pattern
function PriorityQueue() {
    var items = [];
    
    function QueueElement(element, priority){
        this.element = element;
        this.priority = priority;
    }
    
    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element, priority);
        
        if(this.isEmpty()) {
            return items.push(queueElement);
        } else {
            var added  = false;
            for(var i = 0; i < items.length; i++) {
                if(queueElement.priority > items[i].priority) {
                    items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if(!added) {
                items.push(queueElement);
            }
        }
        return items.push(element);
    };
    
    
    this.dequeue = function() {
        return items.shift();
    };
    
    this.front = function() {
        return items[0];
    };
    
    this.isEmpty = function () {
        return items.length === 0;
    };
    
    this.clear = function () {
        items = [];
    };
    
    this.length = function () {
        return items.length;
    };
    
    this.print = function () {
        console.log(items.toString());
    };
}

module.exports.PriorityQueue = PriorityQueue;