var val1,val2,setv;
function  check(){
   val1= document.getElementById("list1").value;
   val2 = document.getElementById("list2").value;
    var radios = document.getElementsByName('rate');
    for (var radio of radios)
    {
        if (radio.checked) {
            setv = radio.value;
            break;
        }
        else{
            setv = null;
        }
    }

    if(val1.length < 1 || val2.length < 1 || setv.length < 1){
        alert("enter value in all fields");
        reset();
        return false;
    }
    else{
       return true;
    }
}
class Node{
    constructor(d)
    {
        this.data = d;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
    }
    push(new_data)
    {
        var new_node = new Node(new_data);
        new_node.next = this.head;
        this.head = new_node;
    }
    isPresent(head, data)
    {
        var t = head;
        while (t != null) {
            if (t.data == data)
                return true;
            t = t.next;
        }
        return false;
    }
    getUnion(head1, head2)
    {
        var t1 = head1, t2 = head2;
        while (t1 != null) {
            this.push(t1.data);
            t1 = t1.next;
        }
        while (t2 != null) {
            if (!this.isPresent(this.head, t2.data))
                this.push(t2.data);
            t2 = t2.next;
        }
    }
     
    getIntersection(head1, head2)
    {
        var result = null;
        var t1 = head1;
        while (t1 != null) {
            if (this.isPresent(head2, t1.data))
                this.push(t1.data);
            t1 = t1.next;
        }
    }
    printList()
    {
        var temp = this.head;
        while (temp != null) {
            document.write(temp.data + " ");
            temp = temp.next;
        }
    }
}
function run(){
    var list1 = new LinkedList();
    var list2 = new LinkedList();
    var str;
    if(check()){
    val1 = val1.split(/(\s+)/);
    val2 = val2.split(/(\s+)/);
    for(var i=0;i<val1.length;i++){
        list1.push(val1[i]);
    }
    for(var i=0;i<val2.length;i++){
        list2.push(val2[i]);
    }
    if(setv == "union"){
        list1.getUnion(list1.head, list2.head);
        str = "head";
        var current = list1.head;
        while(current != null){
            str += current.data;
            current = current.next;
        }
        document.getElementById("result").innerHTML = str;
    }
    else if(setv == "intersection"){
        var list3 = new LinkedList();
        var current1 = list1.head;
        var current2 = list2.head;
        while(current1 != null){
            while(current2 != null){
                if(current1.data == current2.data){
                    list3.add(current1.data);
                }
                current2 = current2.next;
            }
            current1 = current1.next;
            current2 = list2.head;
        }
        var current3 = list3.head;
        str = "";
        while(current3 != null){
            str += current3.data;
            current3 = current3.next;
        }
        document.getElementById("result").innerHTML = str;
    }

}
}



function reset(){
    document.getElementById("list1").value="";
    document.getElementById("list2").value="";
    document.getElementById("sect").value="";
}
