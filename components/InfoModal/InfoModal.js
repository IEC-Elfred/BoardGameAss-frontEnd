// components/InfoModal/InfoModal.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        show: {
            type: Boolean,
            value: false
        },
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    
    methods: {
        onCloseModal:function(){
            this.setData({
                show: false
            })
        }, 
    } 
})
