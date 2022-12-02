<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<link rel="preload" href="/wp-content/themes/mineralwater/dist/index.css" as="style"/>
	<link rel="preload" href="/wp-content/themes/mineralwater/dist/index.js" as="script"/>

	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#00aba9">
	<meta name="theme-color" content="#ffffff">

	<title><?php wp_title(); ?></title>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div class="wrapper">
	<!--ограничение по высоте и фон-->
	<header class="header">
		<!--ограничение по ширине-->
		<div class="header__row container">
			<!--внутренний контейнер-->
			<div class="inner">

				<nav class="desktop-menu">
					<ul class="desktop-menu__list">
						<li><a href="/" class="nav-item nav-item_title">Эльбрусская Прохлада</a></li>
						<li><a href="#" class="nav-item">Главная</a></li>
						<li><a href="#" class="nav-item">Каталог</a></li>
						<li><a href="#" class="nav-item">Как заказать</a></li>
						<li><a href="#" class="nav-item">Отзывы</a></li>
						<li><a href="#" class="nav-item">О нас</a></li>
						<li><a href="#" class="nav-item">Контакты</a></li>
					</ul>

					<div class="desktop-menu__connect">
						<div class="desktop-menu__link"><a href="tel:+79280761498">+7 (928) 076 14 98</a></div>
						<div class="desktop-menu__btn btn">
							<button type="submit">Заказать обратный звонок</button>
						</div>
					</div>
				</nav>

				<div class="mobile-menu">
					<div class="mobile-menu__header">
						<div class="mobile-menu__title"><a href="/">Эльбрусская<br> Прохлада</a></div>
						<div class="menu__burger">
							<div class="menu__icon icon-menu">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
					</div>

					<nav class="mobile-menu__nav">
						<ul class="mobile-menu__list">
							<li><a href="#" class="nav-item">Главная</a></li>
							<li><a href="#" class="nav-item">Каталог</a></li>
							<li><a href="#" class="nav-item">Как заказать</a></li>
							<li><a href="#" class="nav-item">Отзывы</a></li>
							<li><a href="#" class="nav-item">О нас</a></li>
							<li><a href="#" class="nav-item">Контакты</a></li>

							<li>
								<a href="tel:+79280761498" class="nav-item">+7 (928) 076 14 98</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
	</header>



