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

	$('.bash_cabin').hover(function() {
		$('.bash_cabin').css('width','100%');
	$('div.bash_drop_menu').show('fast');
}, function() {
		$('.bash_cabin').css('width','90%');
	$('div.bash_drop_menu').hide('fast');
});

$('.brands').hover(function() {
		$('.brands').css('width','100%');
	$('div.brands_menu').show('fast');
}, function() {
		$('.brands').css('width','90%');
	$('div.brands_menu').hide('fast');
});

	$('.bash_block').hover(function() {
		$('.bash_block').css('width','100%');
	$('div.bash_block_menu').show('fast');
}, function() {
		$('.bash_block').css('width','90%');
	$('div.bash_block_menu').hide('fast');
});


	$('.for_bash').hover(function() {
		$('.for_bash').css('width','100%');
	$('div.for_bash_menu').show('fast');
}, function() {
		$('.for_bash').css('width','90%');
	$('div.for_bash_menu').hide('fast');
});


	$('.bath').hover(function() {
		$('.bath').css('width','100%');
	$('div.bath_menu').show('fast');
}, function() {
		$('.bath').css('width','90%');
	$('div.bath_menu').hide('fast');
});

$('.smes').hover(function() {
		$('.smes').css('width','100%');
	$('div.smes_menu').show('fast');
}, function() {
		$('.smes').css('width','90%');
	$('div.smes_menu').hide('fast');
});

	$('.san').hover(function() {
		$('.san').css('width','100%');
	$('div.san_menu').show('fast');
}, function() {
		$('.san').css('width','90%');
	$('div.san_menu').hide('fast');
});
	
	$('.setup').hover(function() {
		$('.setup').css('width','100%');
	$('div.setup_menu').show('fast');
}, function() {
		$('.setup').css('width','90%');
	$('div.setup_menu').hide('fast');
});


$('.polotno').hover(function() {
		$('.polotno').css('width','100%');
	$('div.polotno_menu').show('fast');
}, function() {
		$('.polotno').css('width','90%');
	$('div.polotno_menu').hide('fast');
});


$('.aks').hover(function() {
		$('.aks').css('width','100%');
	$('div.aks_menu').show('fast');
}, function() {
		$('.aks').css('width','90%');
	$('div.aks_menu').hide('fast');
});


$('.moik').hover(function() {
		$('.moik').css('width','100%');
	$('div.moik_menu').show('fast');
}, function() {
		$('.moik').css('width','90%');
	$('div.moik_menu').hide('fast');
});

$('.bass').hover(function() {
		$('.bass').css('width','100%');
	$('div.bass_menu').show('fast');
}, function() {
		$('.bass').css('width','90%');
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
	$('#left_menu>ul>li.not_active').slideDown('slow');
}, function() {
	$('#left_menu>ul>li.active').css('border-bottom', 'none');
		$('#left_menu>ul>li.not_active').slideUp('slow');
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
 });

