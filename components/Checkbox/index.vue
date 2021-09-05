<template>
  <div>
    <input type="checkbox" :id="name" @change="changeHandler" v-model="manager"/>
    <label :for="name">{{label}}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    isManager:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      manager : false,
    }
  },
  methods: {
    changeHandler(e) {
      const CheckedValue = {
        id: e.target.id,
        value: e.target.checked
      };
      this.$emit("CheckChange", CheckedValue);
    }
  },
  mounted(){
    this.manager = this.isManager;
  }
};
</script>

<style  scoped>
/*************check box

**************************/

[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  display: none;
}

[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: IRANYekan;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 123.6%;
  text-align: right;
  /* Gray ( Paragraph ) */
  color: var(--grayLight);
}

/* checkbox aspect */
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 30px;
  height:30px;
  border: 2px solid var(--grayLight);
  background: #fff;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}
/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: "";
  background-image: url('/icons/tickGreen.svg');
  position: absolute;
  width: 14px;
  height: 12px;
  top: 0.49rem;
  left: 0.5em;
  transition: all 0.2s;
}
/* checked mark aspect changes */
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  transform: scale(1.2);
}
[type="checkbox"]:checked + label:before {
  border: 2px solid var(--green) !important;
}
[type="checkbox"]:checked + label {
  /*color: var(--green);*/

}

/* disabled checkbox */

/* accessibility */
[type="checkbox"]:checked:focus + label:before,
[type="checkbox"]:not(:checked):focus + label:before {
  border: 2px solid var(--black);
}
label:before {
  border-radius: 4px;
}

/* hover style just for information */


</style>
