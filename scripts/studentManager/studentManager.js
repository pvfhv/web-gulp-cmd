/**
 * Created by anchao on 2015/12/30.
 */





class StudentManager {
    init() {
        //学生类
        var Student = Backbone.Model.extend({
            validate: function (attrs, options) {
                for (var key in attrs) {
                    var v = attrs[key];
                    if (_.isString(v) && v.trim().length == 0) {
                        return `${key}不能为空!`;
                    }

                    if (key == 'Score' && isNaN(v)) {
                        return '分数必须是数字!';
                    }
                }
            }
        });
//学生集合
        var StudentCollection = Backbone.Collection.extend({
            model: Student
        });
//学生集合对象
        var oStuColl = new StudentCollection;

//单一学生视图
        var StudentSingle = Backbone.View.extend({
            tagName: 'li',
            className: 'li_c',
            template: _.template($('#item-template').html()),
            initialize: function () {
                this.model.on('change', this.render, this);
                this.model.on('destroy', this.remove, this);
            },
            render: function () {
                this.$el.html(this.template(this.model.toJSON()));
                this.setValue();
                return this;
            },
            remove: function () {
                this.$el.remove();
            },
            setValue: function () {
                var model = this.model;
                this.$el.find(':input').each(function () {
                    var key = $(this).attr('name');
                    $(this).val(model.get(key));
                });
            },
            events: {
                "dblclick span": function (e) {
                    $(e.currentTarget).removeClass('show').addClass('editing').find(':input').focus();
                },
                "blur input,select": function (e) {
                    var $cur=$(e.target);
                    var obj={};
                    obj[$cur.attr('name')]=$cur.val();

                    this.model.set(obj,{validate:true});
                    $(e.target).parent().parent().removeClass('editing').addClass('show');
                },
                "click span a": function(){
                    this.model.destroy();
                }
            }
        });

//整页视图
        var AppStuView = Backbone.View.extend({
            el:'#stuManager',
            initialize: function(){
                oStuColl.on('add',function(stu){
                    stu.set('StuID',oStuColl.length);
                    var stuView = new StudentSingle({
                        model:stu
                    });

                    $("#ulMessage").append(stuView.render().el);
                    $('#Name,#Score').val('');
                    $("#StuID").val(oStuColl.length+1);
                },this);

                $("#StuID").val(oStuColl.length+1);
            },
            events: {
                "click #btnAdd": function(){
                    var stu=new Student;
                    var obj={};
                    $('#Name,#Sex,#Score').each(function(){
                        obj[$(this).attr('name')]=$(this).val();
                    });

                    stu.on('invalid',function(model,error){
                        $("#pStatus").show().html(error);
                    });

                    if(stu.set(obj,{validate:true})){
                        oStuColl.add(stu);
                        $("#pStatus").hide();
                    }
                }
            }
        });
        var app=new AppStuView;
    }
}

export default StudentManager;