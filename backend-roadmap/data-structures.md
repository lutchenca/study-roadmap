### Resources

- [Difference between Stack and Queue Data Structures](https://www.geeksforgeeks.org/difference-between-stack-and-queue-data-structures/) 
- [Stacks vs. Queues In JavaScript](https://dev.to/emmabostian/stacks-vs-queues-in-javascript-4d1o) 
- [Linear Data Structures: Linked Lists, Stacks, and Queues in JS](https://www.freecodecamp.org/news/linear-data-structures-linked-lists-stacks-and-queues-in-javascript-a13c7591ad87/) - 
- [https://www.freecodecamp.org/news/data-structures-101-arrays-a-visual-introduction-for-beginners-7f013bcc355a/](https://www.freecodecamp.org/news/data-structures-101-arrays-a-visual-introduction-for-beginners-7f013bcc355a/)
- [Data Structures](https://www.geeksforgeeks.org/data-structures/) 
- [Top 45 Data Structure Interview Questions and Answers for 2022](https://www.simplilearn.com/data-structure-interview-questions-and-answers-article) 
- [A Step Towards Computing as a Science](https://www.freecodecamp.org/news/a-step-towards-computing-as-a-science-algorithms-data-structures-4c0e2d6ae79a?source=friends_link&sk=1291dffce9f32b30f36339d59a66e12c)

### Summary:

- Data structures
- Types
    - Array
    - Stack
    - Queue
    - Linked lists

# Data Structures

A **data structure** is a particular way of organizing data in a computer so that it can be used effectively. The idea is to reduce the space and time complexities of different tasks. The Data Structure is the way data is organized (stored) and manipulated for retrieval and access. It also defines the way different sets of data relate to one another, establishing relationships and forming algorithms

## Types

Overview of some popular Linear Data Structures: 

- Arrays
- Linked List
- Stack (pilha)
- Queue (fila)

---

- Binary Tree
- Binary Search Tree
- Heap
- Hashing

### Arrays

Basically, an Array it’s a data structure to store ordered collection of values that are all the same. The size of an array must be provided before storing data.

```jsx
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum
```

### Stack (pilha)

Stacks are data structures that follow the “last-in-first-out” or “LIFO” paradigm. We can think of them like a stack of books. In order to retrieve the third book in the stack, we have to take the fifth book off first, then the fourth book, until we retrieve the third book.

**Methods**
Stacks leverage the following methods:
- pop(): Remove the top item from the stack
- push(item): Add an item to the top of the stack
- peek(): Return the item at the top of the stack
- isEmpty(): Returns true if the stack is empty

### Queue (fila)

A queue is similar to a stack in structure and methods, however the paradigm is different. Queues use the “first-in-first-out” or “FIFO” method. This can be thought of like a queue, or line, of people waiting to buy movie tickets.

The person who’s been waiting the longest in line gets served before the person who just joined.

**Methods**
Queues leverage the following methods:
- enqueue(item): Remove the top item from the queue
- dequeue(): Add an item to the top of the queue
- peek(): Return the item at the top of the queue
- isEmpty(): Returns true if the queue is empty

### Linked List

A collection of related things linked to the previous or/and following data items.

A linked list is a linear data structure (like arrays) where each element is a separate object. A linked list is made up of two items that are data and a reference to the next node. A reference to the next node is given with the help of pointers and data is the value of a node. Each node contains data and links to the other nodes. It is an ordered collection of data elements called a node and the linear order is maintained by pointers. It has an upper hand over the array as the number of nodes i.e. the size of the linked list is not fixed and can grow and shrink as and when required, unlike 

Types of Linked List :

1. **Singly Linked List:** In this type of linked list, every node stores address or reference of the next node in the list and the last node has the next address or reference as NULL. For example 1->2->3->4->NULL
2. **Doubly Linked List:** In this type of Linked list, there are two references associated with each node, One of the reference points to the next node and one to the previous node. The advantage of this data structure is that we can traverse in both directions and for deletion, we don’t need to have explicit access to the previous node. Eg. NULL<-1<->2<->3->NULL
3. **Circular Linked Lis**t: Circular linked list is a linked list where all nodes are connected to form a circle. There is no NULL at the end. A circular linked list can be a singly circular linked list or a doubly circular linked list. The advantage of this data structure is that any node can be made as starting node. This is useful in the implementation of the circular queues in the linked list. Eg. 1->2->3->1 [The next pointer of the last node is pointing to the first]
4. **Circular Doubly Linked Lis**t: The circular doubly linked list is a combination of the doubly linked list and the circular linked list. It means that this linked list is bidirectional and contains two pointers and the last pointer points to the first pointer.