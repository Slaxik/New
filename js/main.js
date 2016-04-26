$(document).ready(function(){
initFilter();
LeftCatalog();
Search();
MobileCatalog();
MobileMenu();
sliderValue();
ActiveTab();
BrandTab();
Modal();//Инициализация модального окна
ModalSms();
ModalProduct();

	$('.bash_cabin').hover(function() {
	$(this).addClass('test').removeClass('bash_cabin');
	$('div.bash_drop_menu').show('fast');
}, function() {
	$('.test').addClass('bash_cabin');
	$('.bash_cabin').removeClass('test');
	$('div.bash_drop_menu').hide('fast');
});

$('.brands').hover(function() {
	$(this).addClass('test').removeClass('brands');
	$('div.brands_menu').show('fast');
}, function() {
	$('.test').addClass('brands');
	$('.brands').removeClass('test');
	$('div.brands_menu').hide('fast');
});

	$('.bash_block').hover(function() {
	$(this).addClass('test').removeClass('bash_block');
	$('div.bash_block_menu').show('fast');
}, function() {
	$('.test').addClass('bash_block');
	$('.bash_block').removeClass('test');
	$('div.bash_block_menu').hide('fast');
});


	$('.for_bash').hover(function() {
	$(this).addClass('test').removeClass('for_bash');
	$('div.for_bash_menu').show('fast');
}, function() {
	$('.test').addClass('for_bash');
	$('.for_bash').removeClass('test');
	$('div.for_bash_menu').hide('fast');
});


	$('.bath').hover(function() {
	$(this).addClass('test').removeClass('bath');
	$('div.bath_menu').show('fast');
}, function() {
	$('.test').addClass('bath');
	$('.bath').removeClass('test');
	$('div.bath_menu').hide('fast');
});

$('.smes').hover(function() {
	$(this).addClass('test').removeClass('smes');
	$('div.smes_menu').show('fast');
}, function() {
	$('.test').addClass('smes');
	$('.smes').removeClass('test');
	$('div.smes_menu').hide('fast');
});

	$('.san').hover(function() {
	$(this).addClass('test').removeClass('san');
	$('div.san_menu').show('fast');
}, function() {
	$('.test').addClass('san');
	$('.san').removeClass('test');
	$('div.san_menu').hide('fast');
});
	
	$('.setup').hover(function() {
	$(this).addClass('test').removeClass('setup');
	$('div.setup_menu').show('fast');
}, function() {
	$('.test').addClass('setup');
	$('.setup').removeClass('test');
	$('div.setup_menu').hide('fast');
});


$('.polotno').hover(function() {
	$(this).addClass('test').removeClass('polotno');
	$('div.polotno_menu').show('fast');
}, function() {
	$('.test').addClass('polotno');
	$('.polotno').removeClass('test');
	$('div.polotno_menu').hide('fast');
});


$('.aks').hover(function() {
	$(this).addClass('test').removeClass('aks');
	$('div.aks_menu').show('fast');
}, function() {
	$('.test').addClass('aks');
	$('.aks').removeClass('test');
	$('div.aks_menu').hide('fast');
});


$('.moik,.test').hover(function() {
	$(this).addClass('test').removeClass('moik');
	$('div.moik_menu').show('fast');
}, function() {
	$('.test').addClass('moik');
	$('.moik').removeClass('test');
	$('div.moik_menu').hide('fast');
});

$('.bass').hover(function() {
	$(this).addClass('test').removeClass('bass');
	$('div.bass_menu').show('fast');
}, function() {
	$('.test').addClass('bass');
	$('.bass').removeClass('test');
	$('div.bass_menu').hide('fast');
});


 $('#cart_lg>span').hover(function() {
 	$('#cart_lg>span>sub').css('background-color','#F06723');
 	$('#cart_lg>span>sub').css('color','#FFF');
 }, function() {
 	$('#cart_lg>span>sub').css('background-color','#fff');
 	$('#cart_lg>span>sub').css('color','#000');
});




/*Выпадающее меню слева*/
function MobileCatalog(){
	var a = $('#left_menu').clone();
var b = $('<a id="close" style="cursor:pointer;position:fixed;height:500px;right:0;width:20%;top:0px;"></a>'); 
$('#catalog_menu').on('click', function(){
$(a).appendTo('body').css('position','fixed').css('top','0px').css('right','100%').css('width','80%');
	$(b).appendTo('body');	
	$('#left_menu>ul>li').removeClass().css('display','block');
	$(a).animate({right: '20%'},800);
	$('body').css('position', 'relative').addClass('body_left');
	$('body').animate({left: '80%'},800);
	$(b).css('display', 'block');
	$(a).css('display', 'block');
	$('#left_menu>ul>li>a>img').attr({src: 'img/tab_menu.png'});
	$(a).children('p').children('img').attr({src:'img/menu/catalog.png'});
	$(a).children('ul').children('li').removeAttr('class');
});
	

$(b).on('click', function() {
	$(a).animate({
		right: '100%',
		display: 'none'},
		800,function(){
});
	
	$('body').animate({
		left: '0%',
		position: 'static'
	},
		800);
	$(b).css('display', 'none');
});

}
/*Поиск*/
function Search(){
var Search = 
$('div.search').clone().removeClass('col-lg-12').addClass('search_mobile').removeClass('col-md-12').addClass('col-sm-12').addClass('col-xs-12').css('padding','0').css('display','none').appendTo('#menu_for_mobile');
Search.wrap('<div class="row"></div>');
$('#search').click(function(){
$('div.search').slideToggle('slow');
	});
}

/*Меню*/
function LeftCatalog(){
$('#left_menu>ul>li.active>a>img').attr({
		src: 'img/active_tab_menu.png'
	});
$('#left_menu>ul>li.active').css('border-bottom', 'none');
$('#left_menu').hover(function() {
	$('#left_menu>ul>li.active').css('border-bottom', '1px solid #EDEDED');
	$('#left_menu>ul>li.active>a>img').attr({
		src: 'img/tab_menu.png'
	});
	$('#left_menu>ul>li.not_active').slideDown('600');
}, function() {
	$('#left_menu>ul>li.active').css('border-bottom', 'none');
		$('#left_menu>ul>li.not_active').slideUp('600');
		$('#left_menu>ul>li.active>a>img').attr({
		src: 'img/active_tab_menu.png'
	});
});
}
//Скрытие/Показ Разширенного фильтра
function initFilter(){
var i = 0;
$('#extended_filter>span').on('click', function(){
	$('#change_size').toggle('400');
	$('#extended_filter>p').toggle('400');
	$('#extended_filter>label').toggle('400');
	$('#extended_filter>input').toggle('400');
	$('#extended_filter>div').toggle('400');
	$('.buttons_lg').toggle('400');
	
	if(i == 0){
		$('#extended_filter>span>img').attr({
		src: 'img/plus.png'
	});
		i = 1;
	}else{
$('#extended_filter>span>img').attr({
		src: 'img/minus.png'
	});
i = 0;
	}
	
});
}
function MobileMenu(){
var b = $('<a id="close" style="cursor:pointer;position:fixed;height:500px;right:0;width:20%;top:0px;"></a>'); 
var a = $('#mobile_menu_left');
	$('.mobileMenu').on('click', function(){

$(a).css('position','fixed').css('top','0px').css('right','100%');
	
	$(b).appendTo('body');
	$(a).animate({
		right: '20%'
		},
		800,function(){
			
		});
	$('body').css('position', 'relative').addClass('body_left');
	$('body').animate({
		left: '80%'
	},
		800);
	$(b).css('display', 'block');
	$(a).css('display', 'block');
});
	

$(b).on('click', function() {
	$(a).animate({
		right: '100%',
		display: 'none'},
		800,function(){
});
	
	$('body').animate({
		left: '0%',
		position: 'static'
	},
		800);
	$(b).css('display', 'none');
});
}

function sliderValue(){
//Ползунок для цены

	$("#slider").slider({
	min: 0,
	max: 100000,
	values: [0,100000],
	range: true,
	stop: function(event, ui) {
		$("input#minCost").val($("#slider").slider("values",0));
		$("input#maxCost").val($("#slider").slider("values",1));
    },
    slide: function(event, ui){
		$("input#minCost").val($("#slider").slider("values",0));
		$("input#maxCost").val($("#slider").slider("values",1));
    }
});
$("input#minCost").change(function(){
	var value1=$("input#minCost").val();
	var value2=$("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		$("input#minCost").val(value1);
	}
	$("#slider").slider("values",0,value1);	
});

	
$("input#maxCost").change(function(){
	var value1=$("input#minCost").val();
	var value2=$("input#maxCost").val();
	
	if (value2 > 100000) { value2 = 100000; $("input#maxCost").val(100000)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		$("input#maxCost").val(value2);
	}
	$("#slider").slider("values",1,value2);
});
}
function ActiveTab(){
	$('a.active_categories>img').attr({src: 'img/input_on.png'});
	$('a.active_categories').css('color', '#FF5903');
}
function BrandTab(){
	$('span.brand_tab_menu').on('click', function(){
		$('div.brand_tab').show('400');
		$('div.country_tab').hide('400');
		$('span.brand_tab_menu').addClass('active_btn');
		$('.country_tab_menu').removeClass('active_btn');
	});
	$('span.country_tab_menu').on('click', function(){
		$('div.brand_tab').hide('400');
		$('div.country_tab').show('400');
		$('.country_tab_menu').addClass('active_btn');
		$('span.brand_tab_menu').removeClass('active_btn');
	});
}
function Modal(){

	$('#feedback').click(function(event) {
			$('#modal_window').arcticmodal({
				overlay:{
					css:{
						opacity: 0.5,
						backgroundColor: '#fff'
					}
				},
				openEffect:{
					speed: 300
				},
				closeEffect:{
					speed: 300
				}
			});
          event.preventDefault();
		});
}
function ModalSms(){

	$('#sms').click(function(event) {
			$('#modal_email_window').arcticmodal({
				overlay:{
					css:{
						opacity: 0.5,
						backgroundColor: '#fff'
					}
				},
				openEffect:{
					speed: 300
				},
				closeEffect:{
					speed: 300
				}
			});
      event.preventDefault();
		});
}
$('#modal_window>p>img').hover(function() {
	$(this).attr({src: 'img/close_active.png'});
}, function() {
	$(this).attr({src: 'img/close.png'});
});

$('#modal_email_window>p>img').hover(function() {
	$(this).attr({src: 'img/close_active.png'});
}, function() {
	$(this).attr({src: 'img/close.png'});
});
$('.product').hover(function() {
	$(this).children('.fast_rewiew').css('display', 'block')
}, function() {
	$(this).children('.fast_rewiew').css('display', 'none');
});
function ModalProduct(){
$('.fast_rewiew').on('click', function(event){
	$('.modal_product_window').arcticmodal({
				overlay:{
					css:{
						opacity: 0.6,
						backgroundColor: '#000'
					}
				},
				openEffect:{
					speed: 300
				},
				closeEffect:{
					speed: 300
				}
			});
      event.preventDefault();
});
}
$('.title_modal_product>img').hover(function() {
$(this).attr({src: 'img/close_active.png'});
}, function() {
	$(this).attr({src: 'img/close_b.png'});
});
 });

