/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


//21. Merge Two Sorted Lists
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    

    let head = null
    let sortedList = null
    
    while(list1 || list2){
        
        
        if(list1 && list2){
            //There are nodes in both lists
             if(list1.val > list2.val){
                //list2 has min value
                if(head == null){
                    head = list2
                    sortedList = list2
                }else{
                    sortedList.next = list2
                    sortedList = sortedList.next
                }
                list2 = list2.next
            }else{
                //list1 has min value

                if(head == null){
                    head = list1
                    sortedList = list1
                }else{
                    sortedList.next = list1
                    sortedList = sortedList.next
                }
                list1 = list1.next

            }
        }else if(list1 && list2 == undefined){
            
            
        
            if(head == null){
                head = list1
                sortedList = list1
                break
            }else{
                //There are nodes in list1
                //Just append the entire remainer
                sortedList.next = list1
                break
            }
            
        }else{
            if(head == null){
                head = list2
                sortedList = list2
                break
            }else{
                //There are nodes in list2
                //Just append the entire remainer
                sortedList.next = list2
                break
            }
            
        }
        
    }

return head

};
