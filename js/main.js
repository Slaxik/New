$(document).ready(function(){
initFilter();             //Скрыть/Показать расширенный фильтр
LeftCatalog();			  //Выпадающее меню при наведении
Search();				  //Поиск при клике на маленьких девайсах
MobileCatalog();		  //Сдвиг влево(Показ мобильного каталога)
MobileMenu();			  //Сдвиг влево(Показ мобильного меню)
sliderValue();			  //Ползунок изменения цены
ActiveTab();			  //Активный или не активный input
BrandTab();				  //Перекдючение между странами и брендами
HoverDropMenu();		  //Выпадающее меню при наведении
Modal();                  //Инициализация модального окна
ModalSms();				  //Модальное окно отправить сообщение
ModalProduct();			  //Модальное окно продуктов
ModalProductLine ();	  //Модальное окно продуктов
FastView();               //Быстрый просмотр
FonHeader();			  //Фон у шапки
DropDownMenu();			  //Выпадающее меню на мобильных устройствах

//Изменение фона шапки
function FonHeader(){
	if($(window).width() < 992){
		$('header').removeClass('top_header').addClass('header_sm');
	}
}
function HoverDropMenu(){
	if($(window).width()>=992){
	$('.bash_cabin').hover(function() {
	$(this).addClass('test').removeClass('bash_cabin');
	$('div.bash_drop_menu').fadeIn('fast');
}, function() {
	$('.test').addClass('bash_cabin');
	$('.bash_cabin').removeClass('test');
	$('div.bash_drop_menu').fadeOut('fast');
});

$('.brands').hover(function() {
	$(this).addClass('test').removeClass('brands');
	$('div.brands_menu').fadeIn('fast');
}, function() {
	$('.test').addClass('brands');
	$('.brands').removeClass('test');
	$('div.brands_menu').fadeOut('fast');
});

	$('.bash_block').hover(function() {
	$(this).addClass('test').removeClass('bash_block');
	$('div.bash_block_menu').fadeIn('fast');
}, function() {
	$('.test').addClass('bash_block');
	$('.bash_block').removeClass('test');
	$('div.bash_block_menu').fadeOut('fast');
});


	$('.for_bash').hover(function() {
	$(this).addClass('test').removeClass('for_bash');
	$('div.for_bash_menu').fadeIn('fast');
}, function() {
	$('.test').addClass('for_bash');
	$('.for_bash').removeClass('test');
	$('div.for_bash_menu').fadeOut('fast');
});


	$('.bath').hover(function() {
	$(this).addClass('test').removeClass('bath');
	$('div.bath_menu').fadeIn('fast');
}, function() {
	$('.test').addClass('bath');
	$('.bath').removeClass('test');
	$('div.bath_menu').fadeOut('fast');
});

$('.smes').hover(function() {
	$(this).addClass('test').removeClass('smes');
	$('div.smes_menu').fadeIn('fast');
}, function() {
	$('.test').addClass('smes');
	$('.smes').removeClass('test');
	$('div.smes_menu').fadeOut('fast');
});

	$('.san').hover(function() {
	$(this).addClass('test').removeClass('san');
	$('div.san_menu').fadeIn('fast');
}, function() {
	$('.test').addClass('san');
	$('.san').removeClass('test');
	$('div.san_menu').fadeOut('fast');
});
	
	$('.setup').hover(function() {
	$(this).addClass('test').removeClass('setup');
	$('div.setup_menu').fadeIn('fast');
}, function() {
	$('.test').addClass('setup');
	$('.setup').removeClass('test');
	$('div.setup_menu').fadeOut('fast');
});


$('.polotno').hover(function() {
	$(this).addClass('test').removeClass('polotno');
	$('div.polotno_menu').fadeIn('fast');
}, function() {
	$('.test').addClass('polotno');
	$('.polotno').removeClass('test');
	$('div.polotno_menu').fadeOut('fast');
});


$('.aks').hover(function() {
	$(this).addClass('test').removeClass('aks');
	$('div.aks_menu').fadeIn('fast');
}, function() {
	$('.test').addClass('aks');
	$('.aks').removeClass('test');
	$('div.aks_menu').fadeOut('fast');
});


$('.moik,.test').hover(function() {
	$(this).addClass('test').removeClass('moik');
	$('div.moik_menu').fadeIn('fast');
}, function() {
	$('.test').addClass('moik');
	$('.moik').removeClass('test');
	$('div.moik_menu').fadeOut('fast');
});

$('.bass').hover(function() {
	$(this).addClass('test').removeClass('bass');
	$('div.bass_menu').fadeIn('fast');
}, function() {
	$('.test').addClass('bass');
	$('.bass').removeClass('test');
	$('div.bass_menu').fadeOut('fast');
});
}
}

/*Выпадающее меню слева*/
function MobileCatalog(){
	var a = $('#left_menu').clone();
var b = $('<a id="close" style="cursor:pointer;position:fixed;height:500px;right:0;width:20%;top:0px;"></a>'); 

//Открытие
$('#catalog_menu').on('click', function(){
$(a).appendTo('body').css('position','fixed').css('top','0px').css('right','100%').css('width','80%').css('margin', '0');
$(a).children('.title_catalog_menu').children('p').css('text-align', 'center').css('font-size', '1.3em');
$('#left_menu>ul>li>a').css('border-bottom', '1px solid #EDEDED;');
	$(b).appendTo('body');	
	$('#left_menu>ul>li').removeClass().css('display','block').css('background', '#fff');
	$(a).animate({right: '20%',background: '#fff'},800);
	$('body').css('position', 'relative').addClass('body_left');
	$('body').animate({left: '80%'},800);
	$(b).css('display', 'block');
	$(a).css('display', 'block');
	$('#left_menu>ul>li>a>img').attr({src: 'img/tab_menu.png'});
	$(a).children('p').children('img').attr({src:'img/menu/catalog.png'});
	$(a).children('ul').children('li').removeAttr('class');
});
	
//Закрытие
$(b).on('click', function() {
	$(a).animate({right: '100%',display: 'none'},800);
	$('body').animate({left: '0%',position: 'static'},800);
	$(b).css('display', 'none');
});

}
/*Поиск*/
function Search(){
var Search = 
$('#form_search').clone().addClass('search_mobile').addClass('col-sm-12').addClass('col-xs-12').appendTo('#menu_for_mobile');
Search.wrap('<div class="row"></div>');
$('#search').click(function(){
$(Search).slideToggle('slow');
	});
}

/*Меню*/
function LeftCatalog(){
$('#left_menu>ul>li.active>a>img').attr({src: 'img/active_tab_menu.png'});
$('#left_menu>ul>li.active>a').css('border-bottom', 'none');
$('#left_menu').hover(function() {
	$('#left_menu>ul>li.active').css('padding-bottom', '0');
	$('#left_menu>ul>li.active>a').css('border-bottom', '1px solid #EDEDED');
	$('#left_menu>ul>li>a').css('padding-top', '0.4em')
	$('#left_menu>ul>li.active>a>img').attr({src: 'img/tab_menu.png'});
	$('#left_menu>ul>li.not_active').slideDown('600');
}, function() {
	$('#left_menu>ul>li.active>a').css('border-bottom', 'none');
	$('#left_menu>ul>li>a').css('padding-top', '0.5em');
	$('#left_menu>ul>li.active').css('padding-bottom', '0.55em');
		$('#left_menu>ul>li.not_active').slideUp('600');
		$('#left_menu>ul>li.active>a>img').attr({src: 'img/active_tab_menu.png'});
});
}
//Скрытие/Показ Разширенного фильтра
function initFilter(){
var i = 0;
$('#extended_filter>span').on('click', function(){	
	if(i == 0){
		$('.buttons_lg').slideUp(500);
		$('#change_size').slideUp(500);
		$('#extended_filter>div').slideUp(500);
		$('#extended_filter>input').slideUp(500);
		$('#extended_filter>label').slideUp(500);
		$('#extended_filter>p').slideUp(500);
		$('#extended_filter').css('padding-bottom','0');
		$('#extended_filter>span>img').attr({src: 'img/plus.png'});
		i = 1;
	}else{
		$('.buttons_lg').slideDown(500);
		$('#change_size').slideDown(500);
		$('#extended_filter>p').slideDown(500);
		$('#extended_filter').css('padding-bottom','26px');
		$('#extended_filter>label').slideDown(500);
		$('#extended_filter>input').slideDown(500);
		$('#extended_filter>div').slideDown(500);
		$('#extended_filter>span>img').attr({src: 'img/minus.png'});
i = 0;
	}
	
});
}
$('#nav_header>li>a').hover(function() {
	$(this).removeClass('header_menu_hover').css('text-decoration', 'none');
}, function() {
	$(this).addClass('header_menu_hover');
});
function MobileMenu(){
var b = $('<a id="close" style="cursor:pointer;position:fixed;height:500px;right:0;width:20%;top:0px;"></a>'); 
var a = $('#mobile_menu_left');
	$('.mobileMenu').on('click', function(){

$(a).css('position','fixed').css('top','0px').css('right','100%');
	
	$(b).appendTo('body');
	$(a).animate({right: '20%'},800);
	$('body').css('position', 'relative').addClass('body_left');
	$('body').animate({left: '80%'},800);
	$(b).css('display', 'block');
	$(a).css('display', 'block');
});
$(b).on('click', function() {
	$(a).animate({right: '100%',display: 'none'},800);
	$('body').animate({left: '0%',position: 'static'},800);
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
		$('div.brand_tab').css('display', 'block');
		$('div.country_tab').css('display', 'none');
		$('span.brand_tab_menu').addClass('active_btn');
		$('.country_tab_menu').removeClass('active_btn');
	});
	$('span.country_tab_menu').on('click', function(){
		$('div.brand_tab').css('display', 'none');
		$('div.country_tab').css('display', 'block');
		$('.country_tab_menu').addClass('active_btn');
		$('span.brand_tab_menu').removeClass('active_btn');
	});
}
function Modal(){
	$('.feedback_head').click(function(event) {
			$('#modal_window').arcticmodal({
				overlay:{css:{opacity: 0.5,backgroundColor: '#fff'}},
				openEffect:{speed: 300},
				closeEffect:{speed: 300}});
          event.preventDefault();
		});
}
function ModalSms(){
	$('.sms_head').click(function(event) {
			$('#modal_email_window').arcticmodal({
				overlay:{css:{opacity: 0.5,backgroundColor: '#fff'}},
				openEffect:{speed: 300},
				closeEffect:{speed: 300}});
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

function FastView(){
if($(window).width() > 990){
$('.product').hover(function() {
	$(this).children('.fast_rewiew').css('display', 'block')
}, function() {
	$(this).children('.fast_rewiew').css('display', 'none');
});
}
}
function ModalProduct(){
$('.fast_rewiew').on('click', function(event){
	$('.modal_product_window').arcticmodal({
		overlay:{
			css:{opacity: 0.6,backgroundColor: '#000'}},
			openEffect:{speed: 300},
			closeEffect:{speed: 300}});
      event.preventDefault();
});
}
function ModalProductLine (){
	$('.view_product').on('click', function(event){
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

function DropDownMenu(){
var img = 1;
$('#mobile_menu_left>ul>li').on('click', function(){
	$(this).children('ul').slideToggle(400);
	if(img == 1){
			$(this).children('a').children('img').attr({src: 'img/active_tab_menu.png'});
		img = 0;
	}else{
			$(this).children('a').children('img').attr({src: 'img/tab_menu.png'});
		img = 1;
	}
});
}
	$('a.cart').hover(function() {
		$('.buttons_lg_top>a.cart>span.count_cart_now').css('background-color', '#f06723').css('color','#fff');
	}, function() {
		$('.buttons_lg_top>a.cart>span.count_cart_now').css('background-color', '#fff').css('color','#222e46');
	});
	$('a.views').hover(function() {
		$('.buttons_lg_top>a.views>span.views_now').css('background-color', '#f06723').css('color','#fff');
	}, function() {
		$('.buttons_lg_top>a.views>span.views_now').css('background-color', '#fff').css('color','#222e46');
	});


 });


