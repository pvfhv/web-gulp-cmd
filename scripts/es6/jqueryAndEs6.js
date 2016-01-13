/**
 * Created by anchao on 2016/1/13.
 */
$('#testES6').on('click', (e)=> {
    console.log(this);//class Index 或Index实例
    console.log(e.target.value);
    alert(`e.currentTarget=${e.currentTarget.value}`);
});