const Mock = require('mockjs')
module.exports =  Mock.mock('/list', 'get', () => {
    const res = Mock.mock({
        'array':[{
        'author': '@cname',
        'time':'@time',
        'title':'@ctitle',
        'id':'@guid',
        'paragraph':'@paragraph'}]
})
    return {
        status:200,
        res
    }
})

module.exports =  Mock.mock('/sidelist', 'get', () => {
    const res = Mock.mock({
        'array':[{info:'全部产品',id:'01'},{info:'飞搭Feida',id:'02'},{info:'汉得协同制造软件',id:'03'},
        {info:'汉得智能合同管理软件',id:'04'},{info:'虹珊瑚（Corallium）',id:'05'},{info:'汉得运输管理软件',id:'06'},{info:'汉得智慧财务套件软件',id:'07'}
    ,{info:'汉得运输管理软件',id:'08'},{info:'汉得清分结算软件',id:'09'},{info:'海马汇HIPPIUS',id:'10'}]
})
    return {
        status:200,
        res
    }
})
//根据主标签请求小标签
module.exports = Mock.mock('/smallList','get',(data)=>{
    let res = Mock.mock({
        'array':[
            {
                mainType:'01',
                smallarr:[{
                    id:'01',
                    info:'全部分类'
                },{
                    id:'02',
                    info:'开放平台'
                },{
                    id:'03',
                    info:'项目管理'
                },{
                    id:'04',
                    info:'开发者'
                },{
                    id:'05',
                    info:'猪齿鱼'
                },{
                    id:'06',
                    info:'海马汇'
                },]
            },{
                mainType:'02',
                smallarr:[{
                    id:'01',
                    info:'全部分类'
                },{
                    id:'02',
                    info:'开放平台'
                }
                ]
            }
        ]
    })
    res=res.array.filter((item)=>item.mainType==data.body)
    return {
        status:200,
        res
        
    }
})

//get请求：模拟分页数据 9条=1页
module.exports = Mock.mock('/videoList', 'get', (options) => {
    const {mainType,smallType,currentPage}=  JSON.parse(options.body)
	//接受参数：是JSON格式，需要转换成对象
    let ret = Mock.mock({
        'list|11':[{'id|+1':1, 'title':'2020 前端技术的趋势','info':'介绍Hzero前端开发的流程及规范，助力开发','img':'https://hsop-hmkt.fsh.bcebos.com/3/HSOP-BAIDU/155cdffbf2ba48d1890a611b428c1154@1643184989988.com/9914bc5c-b3d5-4129-aad4-c4d01ed89826',
    'time':'01:20:56','times|+20':888,'count|+1':9,'mainType':'02','smallType':'02','top':false}]
    })
    ret = ret.list.filter((item)=>item.mainType==mainType||mainType=='01')
    
    if(smallType.length !=0 && smallType.findIndex((val)=>val=='01') ==-1){
        ret = ret.filter((item)=>smallType.findIndex((val)=>{
            return val==item.smallType})!=-1)
    }
    if(ret[0]&&ret[1]){
        ret[0].top=true
        ret[1].top=true
    }
    return {
        status:200,
        data:{
            list:ret.filter((item)=>item.id<=(currentPage-0)*9&&item.id>(currentPage-1)*9),
            page:  Math.floor(ret.length%9>0 ?ret.length/9+1:ret.length/9)
            //分页计算
        }
    }
})

//get请求：模拟分页数据 4条=1页
module.exports = Mock.mock('/searchList', 'get', (options) => {
   const obj = JSON.parse(options.body)
   const reg = new RegExp(obj.searchKey)
   const currentPage = obj.currentPage
   console.log(currentPage)
	//接受参数：是JSON格式，需要转换成对象
    let ret = Mock.mock({
        'list|11':[{'id|+1':1, 'title':'2020 前端技术的趋势','info':'介绍Hzero前端开发的流程及规范，助力开发','img':'https://hsop-hmkt.fsh.bcebos.com/3/HSOP-BAIDU/155cdffbf2ba48d1890a611b428c1154@1643184989988.com/9914bc5c-b3d5-4129-aad4-c4d01ed89826',
    'time':'01:20:56','times|+20':888,'count|+1':9,'mainType':'02','smallType':'02','detail':'HZERO技术中台，结合了汉得多年的项目实施经验，抽象、封装的大量的标准服务及功能，以帮助企业产品研发、项目实施更加高效便捷，避免大量重复造轮子所带来的成本浪费。平台主要包含业务中台、数据中台和技术中台，目标是搭建一个可支持各种产品快速组建、开发的融合平台。',
'label':['Hzero企业版','赋能培训'],top:true}]
    })
    ret = ret.list.filter((item)=>reg.test(item.title))
    return {
        status:200,
        data:{
            all:ret.length,
            list:ret.filter((item)=>item.id<=(currentPage-0)*4&&item.id>(currentPage-1)*4),
            page:  Math.floor(ret.length%4>0 ?ret.length/4+1:ret.length/4)
            //分页计算
        }
    }
})


