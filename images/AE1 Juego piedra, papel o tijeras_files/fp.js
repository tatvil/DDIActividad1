(function() {
  window.base_configuration = {
    BASE_URL: 'https://aplicaciones.lti.unir.net',
    CANVAS_URL: 'https://campusfp.unir.net',
    ACCESS_TOKEN: '15445~qdOcTCM9y6v3H1XWjVglnDHx63hPnOrWFEZ1UACCOwn9c8G5rzYr1FwqlhMbR1MF',
    GENERAL_SURVEYS: true,
    COURSE_SURVEYS: true,
    OPINATOR_SURVEYS: true,
    ALCANCE_ENCUESTA_URL: 'https://alcanceencuestas.unir.net/api/v1/obtener-encuesta-disponible',
    PROFESORES_CURSO_URL: 'https://servicios.unir.net/WS_Integracion/plantillasEstudios.svc/getProfesoresByCurso/',
    PRIMARY_SOURCE_URL: 'https://integracion-canvas-crosscutting.unir.net',
    PRIMARY_SOURCE_PARAMS: '?instanceCanvas=canvasfp',
    LOR_QUIZZES_INFO_URL: '/accounts/1/external_tools/1452?launch_type=global_navigation&display=full_width'
  };

  if (!window.UNIR_LTI) {
    window.UNIR_LTI = window.base_configuration;
  } else {
    window.UNIR_LTI = $.extend(window.base_configuration, window.UNIR_LTI);
  }

  window.external_scripts = {
    'vendor/google/jsapi': '//www.google.com/jsapi?',
    'vendor/bootstrap-js': '//maxcdn.bootstrapcdn.com/bootstrap/2.0.4/js/bootstrap.js',
    'vendor/bootstrap-tab/bootstrap-tab': '//netdna.bootstrapcdn.com/twitter-bootstrap/2.0.4/js/bootstrap-tab.js',
    'vendor/opinator': 'https://www.opinator.com/resources/js/embed.main.min.js',
    'moment': '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.3.1/moment.js',
    'timezone': '//momentjs.com/downloads/moment-timezone.js',
    'arrive': '//cdnjs.cloudflare.com/ajax/libs/arrive/2.4.1/arrive.js'
  };

  window.unirFrases = [];

  window.unirFrases.push({
    text: 'Tablero',
    replace: 'Aulas',
    selector: '#global_nav_dashboard_link .menu-item__text'
  }, {
    text: 'Tablero',
    replace: 'Aulas',
    selector: '#dashboard_header_container .ic-Dashboard-header__title'
  }, {
    text: 'Cursos',
    replace: 'Asignaturas',
    selector: '#global_nav_courses_link .menu-item__text'
  }, {
    text: 'Cursos',
    replace: 'Asignaturas',
    selector: 'div[aria-label="Bandeja de cursos"] h2'
  }, {
    text: 'Todos los cursos',
    replace: 'Todas las asignaturas',
    selector: 'div[aria-label="Bandeja de cursos"] a[href="/courses"]'
  }, {
    text: '¡Bienvenido a sus cursos! Para personalizar la lista de cursos, haga clic en el vínculo "Todos los cursos" y destaque los cursos que desea mostrar.',
    replace: '¡Bienvenido a sus asignaturas! Para personalizar la lista de asignaturas, haga clic en el vínculo "Todas los asignaturas" y destaque las asignaturas que desea mostrar.',
    selector: 'div[aria-label="Bandeja de cursos"] .tray-with-space-for-global-nav'
  }, {
    text: 'Todos los cursos',
    replace: 'Todas las asignaturas',
    selector: '.header-bar h2'
  }, {
    text: 'Notificaciones',
    replace: 'Configuración',
    selector: 'div[aria-label="Bandeja de perfiles"] a'
  }, {
    text: 'Notificaciones',
    replace: 'Configuración',
    selector: 'nav[role="navigation"] li.section a'
  }, {
    text: 'Configuraciones',
    replace: 'Editar Perfil',
    selector: 'div[aria-label="Bandeja de perfiles"] a'
  }, {
    text: 'Configuraciones',
    replace: 'Editar Perfil',
    selector: 'nav[role="navigation"] li.section a[href="/profile/settings"]'
  }, {
    text: 'Configuración de ',
    replace: 'Perfil de ',
    selector: '#breadcrumbs li a span'
  }, {
    text: 'Configuración de ',
    replace: 'Perfil de ',
    selector: '#content h1'
  }, {
    text: 'QR for Mobile Login',
    replace: 'QR para el móvil',
    selector: 'div[aria-label="Bandeja de perfiles"] button'
  }, {
    text: 'Página de Inicio',
    replace: 'Inicio',
    selector: 'nav[role="navigation"] #section-tabs li a'
  }, {
    text: 'Anuncios',
    replace: 'Tablón',
    selector: 'nav[role="navigation"] #section-tabs li a'
  }, {
    text: 'Anuncios',
    replace: 'Tablón',
    selector: '#breadcrumbs li span'
  }, {
    text: 'Foros de discusión',
    replace: 'Foros',
    selector: 'nav[role="navigation"] #section-tabs li a'
  }, {
    text: 'Foros de discusión',
    replace: 'Foros',
    selector: '#breadcrumbs li span'
  }, {
    text: 'Foros de discusión anclados',
    replace: 'Foros destacados',
    selector: '.pinned-discussions-v2__wrapper'
  }, {
    text: 'Foros de discusión',
    replace: 'Foros',
    selector: '.unpinned-discussions-v2__wrapper'
  }, {
    text: 'foros de discusión',
    replace: 'foros',
    selector: '.discussions-v2__container-image span div'
  }, {
    text: 'foro de discusión',
    replace: 'foro',
    selector: '.discussions-v2__container-image span div'
  }, {
    text: 'Clases presenciales',
    replace: 'Webinars',
    selector: 'nav[role="navigation"] #section-tabs li a'
  }, {
    text: 'Tareas',
    replace: 'Mis tareas',
    selector: 'nav[role="navigation"] #section-tabs li a'
  }, {
    text: 'Tareas',
    replace: 'Mis tarea',
    selector: '#breadcrumbs li span'
  }, {
    text: 'Calificaciones',
    replace: 'Mis Resultados',
    selector: 'nav[role="navigation"] #section-tabs li a'
  }, {
    text: 'Calificaciones',
    replace: 'Mis Resultados',
    selector: '#breadcrumbs li span'
  }, {
    text: 'Personas',
    replace: 'Comunidad',
    selector: 'nav[role="navigation"] #section-tabs li a'
  }, {
    text: 'Personas',
    replace: 'Comunidad',
    selector: '#breadcrumbs li span'
  }, {
    text: 'Módulos',
    replace: 'Unid. Formativas',
    selector: 'nav[role="navigation"] #section-tabs li a'
  }, {
    text: 'Módulos',
    replace: 'Unid. Formativas',
    selector: '#breadcrumbs li span'
  }, {
    text: 'Por hacer',
    replace: 'Notificaciones',
    selector: '#right-side h2'
  }, {
    text: 'Comenzar un nuevo curso',
    replace: 'Comenzar una nueva asignatura',
    selector: '#right-side #start_new_course'
  }, {
    text: 'Ver las calificaciones',
    replace: 'Ver Mis Resultados',
    selector: '#right-side a[href="/grades"]'
  });

  window.unirFrasesEnglish = [];

  if (!window.banners) {
    window.banners = [];
  }

}).call(this);
(function() {
  window.get_url_params = function(sParam) {
    var k, len, sPageURL, sParameterName, sURLVariables, varible;
    sPageURL = window.location.search.substring(1);
    sURLVariables = sPageURL.split('&');
    for (k = 0, len = sURLVariables.length; k < len; k++) {
      varible = sURLVariables[k];
      sParameterName = varible.split('=');
      if (sParameterName[0] === sParam) {
        return sParameterName[1];
      }
    }
    return null;
  };

  window.get_parameter_by_name = function(name, url) {
    var regex, results;
    name = name.replace(/[\[\]]/g, "\\$&");
    regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  window.unirGoogleTagManager = function() {
    if (UNIR_LTI.PRODUCTION) {
      return (function(w, d, s, l, i) {
        var dl, f, j;
        w[l] = w[l] || [];
        w[l].push({
          'gtm.start': new Date().getTime(),
          'event': 'gtm.js'
        });
        f = d.getElementsByTagName(s)[0];
        j = d.createElement(s);
        dl = l !== 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
        return f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', UNIR_LTI.GA_KEY);
    }
  };

  window.retargeting_script = function() {
    var f, j;
    if (UNIR_LTI.PRODUCTION) {
      window.versaTag = {};
      window.versaTag.id = "3157";
      window.versaTag.sync = 0;
      window.versaTag.dispType = "js";
      window.versaTag.ptcl = "HTTPS";
      window.versaTag.bsUrl = "bs.serving-sys.com/BurstingPipe";
      window.versaTag.activityParams = {
        "OrderID": "",
        "Session": "",
        "Value": "",
        "productid": "",
        "productinfo": "",
        "Quantity": "",
        "tp_ubicacion": "",
        "tp_titulacion": ""
      };
      window.versaTag.retargetParams = {};
      window.versaTag.dynamicRetargetParams = {};
      window.versaTag.conditionalParams = {};
      f = document.getElementsByTagName('script')[0];
      j = document.createElement('script');
      j.async = true;
      j.id = 'ebOneTagUrlId';
      j.src = '//secure-ds.serving-sys.com/SemiCachedScripts/ebOneTag.js';
      return f.parentNode.insertBefore(j, f);
    }
  };

  window.unir_storage = function() {
    var nullStorage;
    if (typeof Storage !== "undefined" && Storage !== null) {
      return window.localStorage;
    } else {
      nullStorage = {
        getItem: function(key) {
          return void 0;
        },
        setItem: function(key, value) {}
      };
      return nullStorage;
    }
  };

  window.bannered = false;

  window.banner_interval = null;

  window.unir_banners = function() {
    if (window.location.pathname !== '/') {
      return;
    }
    return window.banner_interval = setInterval(function() {
      var anchor, banner, banner_container, item, k, len, loads, ref, right_side;
      if ($('#right-side .banners').length > 0) {
        window.bannered = true;
      } else {
        right_side = $('#right-side');
        if (right_side.length > 0 && window.banners.length > 0) {
          loads = 0;
          banner_container = $('<div class="banners"></div>');
          banner_container.appendTo(right_side);
          ref = window.banners;
          for (k = 0, len = ref.length; k < len; k++) {
            item = ref[k];
            banner = $('<img />').attr('src', item.src).attr('class', 'banner');
            if (item.href) {
              anchor = $('<a />').attr('href', item.href);
              banner = anchor.append(banner);
            }
            banner.appendTo(banner_container);
          }
          $('.banners img').on('load', function() {
            loads += 1;
            if (loads === window.banners.length) {
              return setTimeout(function() {
                return window.getRightSide();
              }, 100);
            }
          });
        }
      }
      if (window.bannered) {
        return clearTimeout(window.banner_interval);
      }
    }, 500);
  };

  window.getRightSide = function() {
    var footer_margin_top, right_side_height, top, wrapper_container;
    right_side_height = $('#right-side').height();
    wrapper_container = $('#wrapper-container').height();
    footer_margin_top = parseInt(jQuery('#footer').css('margin-top'));
    if (right_side_height > wrapper_container) {
      top = footer_margin_top + right_side_height - wrapper_container;
      return $('#footer').css('margin-top', top);
    } else {
      top = footer_margin_top;
      return $('#footer').css('margin-top', top);
    }
  };

  window.getCurrentCourseSisID = function(callback) {
    var course_id, url;
    if (ENV.context_asset_string) {
      course_id = ENV.context_asset_string.split('_');
      if (course_id[0] === 'course' && course_id[1]) {
        url = "/api/v1/courses/" + course_id[1];
        url += "?access_token=" + UNIR_LTI.ACCESS_TOKEN;
        return $.ajax({
          url: url,
          type: 'get',
          cache: false,
          success: function(data) {
            return callback(data.sis_course_id);
          }
        });
      }
    }
  };

  window.load_external_js = function(key, callback) {
    var ext_url;
    ext_url = window.external_scripts[key];
    return $.getScript(ext_url, function() {
      if (callback != null) {
        return callback();
      }
    });
  };

  window.selected_fragment = function() {
    var fragment, pos, url;
    url = window.location.href;
    pos = url.indexOf('#');
    if (pos > 0) {
      fragment = url.substring(pos);
      return $('div.header', 'body.sub_accounts ' + fragment).css('background', '#E5F2F8');
    }
  };

  window.autocheck_link = function() {
    var $frm_container, html, url;
    if ($('body.ic-Login-Body').length) {
      url = '//resources.unir.net/unir/autocheck/';
      $frm_container = $('.ic-Login__body');
      html = "<div class=\"autocheck-container\"><a id=\"a-autocheck\" href=\"#\">Comprobar requisitos técnicos</a>\n<i class=\"icon-settings\"></i></div>";
      $frm_container.append(html);
      return $('#a-autocheck', $frm_container).on('click', function(e) {
        var check_container;
        e.preventDefault();
        check_container = $("<div id=\"dialog" + url + "\" />");
        check_container.append("<i class='autocheck-close icon-trouble icon-Solid'></i>");
        check_container.append("<iframe id=\"iframe-" + url + "\" src=\"\"></iframe>");
        $('body').append(check_container);
        check_container.dialog({
          autoOpen: true,
          modal: false,
          resizable: false,
          minWidth: 620,
          minHeight: 500,
          open: function(ev, ui) {
            $(this).find('iframe').attr('src', url);
            $(this).find('iframe').addClass('iframe-encuesta');
            return $(this).parent().addClass('autocheck-modal');
          }
        });
        return $('.autocheck-close', check_container).on('click', function() {
          return $(check_container).dialog('close');
        });
      });
    }
  };

}).call(this);
(function() {
  window.autologinBiblioteca = function(sis_id, user_type) {
    var url;
    if (UNIR_LTI.UNIR_BIBLIOTECA_VIRTUAL && sis_id) {
      url = UNIR_LTI.BIBLIOTECA_UNIR_LOGIN_JS_URL + sis_id + '?tipoPersona=' + user_type;
      return $.ajax({
        url: url,
        cache: false,
        dataType: 'json',
        crossDomain: true,
        success: function(data) {
          return data = 1;
        }
      });
    }
  };

  window.getCurrentUserSisID = function() {
    var storage, url;
    storage = window.unir_storage();
    window.checkCurrentUserSisID(storage);
    if (ENV.current_user_id) {
      if (storage.current_user_sis_id) {
        UNIR_LTI.CURRENT_USER_SIS_ID = storage.current_user_sis_id;
        return UNIR_LTI.CURRENT_USER_TYPE = storage.current_user_type;
      } else {
        url = "/api/v1/users/" + ENV.current_user_id + "/logins";
        url += "?access_token=" + UNIR_LTI.ACCESS_TOKEN;
        return $.ajax({
          url: url,
          async: false,
          success: function(data) {
            var data_sis_id, data_user_type;
            data_sis_id = data[0].sis_user_id;
            data_user_type = '1';
            if (data_sis_id) {
              data_sis_id = data_sis_id.split('-');
              if (data_sis_id.length > 1) {
                data_user_type = '2';
              }
              data_sis_id = data_sis_id.pop();
            }
            storage.setItem('current_user_id', ENV.current_user_id);
            storage.setItem('current_user_sis_id', data_sis_id);
            storage.setItem('current_user_type', data_user_type);
            UNIR_LTI.CURRENT_USER_SIS_ID = data_sis_id;
            UNIR_LTI.CURRENT_USER_TYPE = data_user_type;
            return window.autologinBiblioteca(UNIR_LTI.CURRENT_USER_SIS_ID, UNIR_LTI.CURRENT_USER_TYPE);
          }
        });
      }
    }
  };

  window.checkCurrentUserSisID = function(storage) {
    if (ENV.current_user_id) {
      if (storage.current_user_id !== ENV.current_user_id) {
        storage.removeItem('current_user_id');
        storage.removeItem('current_user_sis_id');
        return storage.removeItem('current_user_type');
      }
    } else {
      storage.removeItem('current_user_id');
      storage.removeItem('current_user_sis_id');
      return storage.removeItem('current_user_type');
    }
  };

}).call(this);
(function() {
  window.unirGlobalNavigation = function() {
    if (get_url_params('launch_type') === 'global_navigation') {
      return $('body').removeClass('course-menu-expanded');
    }
  };

  window.unirChangeTranslations = function() {
    return window.defaultChangeTranslations(window.unirFrases);
  };

  window.defaultChangeTranslations = function(fraseList) {
    var frase, i, len, results, selector;
    results = [];
    for (i = 0, len = fraseList.length; i < len; i++) {
      frase = fraseList[i];
      selector = frase.selector;
      if (!frase.inputButton) {
        selector += ":contains('" + frase.text + "')";
      }
      results.push($(selector).each(function(idx, item) {
        var replaced;
        replaced = $(item).html().replace(frase.text, frase.replace);
        return $(item).html(replaced);
      }));
    }
    return results;
  };

  window.unirChangeTranslationsEnglish = function() {
    var current_lang;
    current_lang = ENV.BIGEASY_LOCALE;
    if (/^en/.test(current_lang)) {
      return load_external_js('arrive', function() {
        return $('.ReactTrayPortal').arrive('#help_tray', function(help_tray) {
          return window.defaultChangeTranslations(window.unirFrasesEnglish);
        });
      });
    }
  };

  window.navigationNoTeachers = function() {
    var teacher;
    if ($("#navigation_tab").length) {
      teacher = false;
      $.each(ENV.current_user_roles, function(index, value) {
        if (value === 'teacher') {
          return teacher = true;
        }
      });
      $.each(ENV.ALL_ROLES, function(index, value) {
        var current_user_rol, custom_role, i, len, ref, results, roles;
        if (value['base_role_name'] === 'TeacherEnrollment') {
          roles = ENV.ALL_ROLES[index];
          ref = roles.custom_roles;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            custom_role = ref[i];
            results.push((function() {
              var j, len1, ref1, results1;
              ref1 = ENV.current_user_roles;
              results1 = [];
              for (j = 0, len1 = ref1.length; j < len1; j++) {
                current_user_rol = ref1[j];
                if (custom_role['name'] === current_user_rol) {
                  results1.push(teacher = true);
                } else {
                  results1.push(void 0);
                }
              }
              return results1;
            })());
          }
          return results;
        }
      });
      $.each(ENV.current_user_roles, function(index, value) {
        if (value === 'admin') {
          return teacher = false;
        }
      });
      if (teacher === true) {
        $('#navigation_tab').remove();
        return $('#tab-navigation').remove();
      }
    }
  };

  window.tooltipOverQuestionsTest = function() {
    if ($('#submit_quiz_form').length) {
      return $('div .flag_question').attr('data-tooltip', 'right').attr('data-html-tooltip-title', 'Haz clic para reservarte la pregunta y revisarla posteriormente').addClass('tool-tip-quiz');
    }
  };

  window.profileMenuExtends = function() {
    if ($('body[class*="context-user_"]').length) {
      return $('#section-tabs .home').parent().remove();
    }
  };

  window.remove_consider_graded_assignments = function() {
    if ($('body.grades').length === 0) {
      return;
    }
    $('#only_consider_graded_assignments').prop('checked', true).trigger('click');
    return $('#only_consider_graded_assignments_wrapper').remove();
  };

}).call(this);
(function() {
  window.unirMenuAyuda = function() {
    var suportLink;
    $('#help-dialog-options li a').removeAttr('target');
    suportLink = $('a[href="#create_ticket"]');
    if (suportLink.length) {
      $(suportLink).attr('href', 'https://jira.unir.net/servicedesk/customer/portal/1');
      return $(suportLink).attr('target', '_blank');
    }
  };

  window.gradebook_remove_consider_graded_assignments = function() {
    if ($('#gradebook-toolbar').length === 0) {
      return;
    }
    return setTimeout(function() {
      var $menuitem;
      $menuitem = $('#include-ungraded-list-item');
      if ($menuitem.attr('aria-checked') === 'false') {
        return $menuitem.trigger('click');
      }
    }, 500);
  };

}).call(this);
(function() {
  window.opinatorEncuestaIPN = function() {
    var cookie_value, survey_key;
    if (!UNIR_LTI.OPINATOR_SURVEYS) {
      return;
    }
    if (UNIR_LTI.CURRENT_USER_SIS_ID) {
      survey_key = "opinator_ipn_survey_" + UNIR_LTI.CURRENT_USER_SIS_ID;
      cookie_value = $.cookie(survey_key);
      if (!cookie_value) {
        return load_external_js('vendor/opinator', function() {
          var url;
          url = "/api/v1/users/" + window.ENV.current_user_id + "/enrollments?type[]=StudentEnrollment&per_page=50";
          url += "&access_token=" + UNIR_LTI.ACCESS_TOKEN;
          return $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            cache: false,
            success: function(enrollments) {
              var course_sis_id, section_sis_id;
              if (enrollments.length === 0) {
                return false;
              }
              course_sis_id = '1';
              section_sis_id = '1';
              $.cookie(survey_key, '1', {
                expires: 0.05,
                path: '/'
              });
              if ((course_sis_id != null) && (section_sis_id != null)) {
                return $.ajax({
                  url: UNIR_LTI.ALCANCE_ENCUESTA_URL,
                  type: 'GET',
                  data: {
                    idAsignatura: course_sis_id,
                    idGrupo: section_sis_id,
                    TipoEncuesta: 'G'
                  },
                  dataType: 'json',
                  success: function(xhr_url) {
                    var ac, id, must_opi, my_opi, parser, sc;
                    if ((xhr_url != null) && xhr_url.length > 0) {
                      parser = document.createElement('a');
                      parser.href = xhr_url;
                      my_opi = parser.pathname.split('/');
                      my_opi = my_opi[my_opi.length - 1];
                      id = window.get_parameter_by_name('id', parser.search);
                      id = id.replace('*', UNIR_LTI.CURRENT_USER_SIS_ID);
                      sc = window.get_parameter_by_name('sc', parser.search);
                      ac = window.get_parameter_by_name('ac', parser.search);
                      must_opi = my_opi;
                      if (must_opi[0] === '-') {
                        must_opi = must_opi.substring(1) + '-';
                      }
                      return window.OPINATOR.mustShowOpi(must_opi, id, function() {
                        return window.OPINATOR.showOpi(my_opi, id, sc, ac, 'carry_IdAsignatura=' + course_sis_id + '&carry_IdGrupo=' + section_sis_id);
                      }, function() {
                        if (console) {
                          return console.log('no mostrar');
                        }
                      });
                    }
                  }
                });
              }
            }
          });
        });
      }
    }
  };

  window.opinatorEncuestaGeneral = function() {
    var cookie_value, survey_key;
    if (!UNIR_LTI.OPINATOR_SURVEYS) {
      return;
    }
    if (UNIR_LTI.CURRENT_USER_SIS_ID) {
      survey_key = "opinator_survey_" + UNIR_LTI.CURRENT_USER_SIS_ID;
      cookie_value = $.cookie(survey_key);
      if (!cookie_value) {
        return load_external_js('vendor/opinator', function() {
          var url;
          url = '/api/v1/users/' + window.ENV.current_user_id + '/enrollments?type[]=StudentEnrollment&per_page=50';
          url += "&access_token=" + UNIR_LTI.ACCESS_TOKEN;
          return $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            cache: false,
            success: function(enrollments) {
              var course_sis_id, datos_matriculas, section_sis_id;
              course_sis_id = null;
              section_sis_id = null;
              datos_matriculas = [];
              $.each(enrollments, function(idx, enroll) {
                course_sis_id = window.courseSurveySis(enroll.sis_course_id);
                section_sis_id = enroll.sis_section_id;
                if (/^0-/.test(section_sis_id)) {
                  return true;
                }
                if (/^0\|/.test(section_sis_id)) {
                  return true;
                }
                if ((course_sis_id != null) && (section_sis_id != null)) {
                  return datos_matriculas.push({
                    course_sis_id: course_sis_id.split('-').reverse()[0],
                    section_sis_id: section_sis_id
                  });
                }
              });
              $.cookie(survey_key, '1', {
                expires: 0.05,
                path: '/'
              });
              if (datos_matriculas.length > 0) {
                return $.each(datos_matriculas.slice(0, 50), function(idx, dato_mat) {
                  var ac, id, must_opi, my_opi, parser, sc, xhr_url;
                  xhr_url = $.ajax({
                    url: UNIR_LTI.ALCANCE_ENCUESTA_URL,
                    type: 'GET',
                    data: {
                      idAsignatura: dato_mat.course_sis_id,
                      idGrupo: dato_mat.section_sis_id,
                      TipoEncuesta: 'G'
                    },
                    async: false,
                    dataType: 'json'
                  }).responseText;
                  xhr_url = eval(xhr_url);
                  if (xhr_url.length > 0) {
                    $.cookie(survey_key, '1', {
                      expires: 0.05,
                      path: '/'
                    });
                    parser = document.createElement('a');
                    parser.href = xhr_url;
                    my_opi = parser.pathname.split('/');
                    my_opi = my_opi[my_opi.length - 1];
                    id = window.get_parameter_by_name('id', parser.search);
                    id = id.replace('*', UNIR_LTI.CURRENT_USER_SIS_ID);
                    sc = window.get_parameter_by_name('sc', parser.search);
                    ac = window.get_parameter_by_name('ac', parser.search);
                    must_opi = my_opi;
                    if (must_opi[0] === '-') {
                      must_opi = must_opi.substring(1) + '-';
                    }
                    return window.OPINATOR.mustShowOpi(must_opi, id, function() {
                      return window.OPINATOR.showOpi(my_opi, id, sc, ac, 'carry_IdAsignatura=' + dato_mat.course_sis_id + '&carry_IdGrupo=' + dato_mat.section_sis_id);
                    }, function() {
                      if (console) {
                        return console.log('no mostrar', dato_mat.course_sis_id, dato_mat.section_sis_id, xhr_url);
                      }
                    });
                  }
                });
              }
            }
          });
        });
      }
    }
  };

  window.opinatorEncuestaAsignatura = function() {
    if (!UNIR_LTI.OPINATOR_SURVEYS) {
      return;
    }
    if (UNIR_LTI.CURRENT_USER_SIS_ID) {
      return window.getCurrentCourseSisID(function(sis_course_id) {
        var cookie_value, survey_key;
        survey_key = "opinator_survey_" + UNIR_LTI.CURRENT_USER_SIS_ID + "_" + sis_course_id;
        cookie_value = $.cookie(survey_key);
        if (!cookie_value) {
          return load_external_js('vendor/opinator', function() {
            var canvas_course_id, url;
            canvas_course_id = window.ENV.COURSE_ID;
            if (canvas_course_id == null) {
              canvas_course_id = window.ENV.COURSE.id;
            }
            url = "/api/v1/courses/" + canvas_course_id + "/enrollments?type[]=StudentEnrollment&user_id=self";
            return $.ajax({
              url: url,
              type: 'GET',
              dataType: 'json',
              cache: false,
              success: function(enrollments) {
                var course_sis_id, course_sis_id_blocks, encuesta_data, section_sis_id;
                course_sis_id = null;
                section_sis_id = null;
                $.each(enrollments, function(idx, enroll) {
                  course_sis_id = window.courseSurveySis(enroll.sis_course_id);
                  section_sis_id = enroll.sis_section_id;
                  if ((course_sis_id != null) && (section_sis_id != null)) {
                    return false;
                  }
                });
                $.cookie(survey_key, '1', {
                  expires: 0.05,
                  path: '/'
                });
                if ((course_sis_id != null) && (section_sis_id != null)) {
                  course_sis_id_blocks = course_sis_id.split('-').reverse();
                  course_sis_id = course_sis_id_blocks[0];
                  encuesta_data = {
                    idAsignatura: course_sis_id,
                    idGrupo: section_sis_id,
                    TipoEncuesta: 'A'
                  };
                  if (course_sis_id_blocks[course_sis_id_blocks.length - 1] === '0') {
                    encuesta_data.idAsignatura = '0';
                    if (section_sis_id.includes('|')) {
                      encuesta_data.idGrupo = section_sis_id.split('|').reverse()[0];
                    } else {
                      encuesta_data.idGrupo = section_sis_id.split('-').reverse()[0];
                    }
                    encuesta_data.TipoEncuesta = 'Z';
                  }
                  return $.ajax({
                    url: UNIR_LTI.ALCANCE_ENCUESTA_URL,
                    type: 'GET',
                    data: encuesta_data,
                    dataType: 'json',
                    success: function(xhr_url) {
                      if ((xhr_url != null) && xhr_url.length > 0) {
                        return $.ajax({
                          url: UNIR_LTI.PROFESORES_CURSO_URL + encuesta_data.idGrupo,
                          type: 'GET',
                          dataType: 'json',
                          success: function(xhr) {
                            var a_correctores, a_impartidores, ac, correctores, i, id, impartidores, indice, j, k, must_opi, my_opi, parser, respuesta, sc, str_correctores, str_impartidores;
                            if (!xhr.ObtenerProfesoresDeCursosResult.EsError) {
                              respuesta = xhr.ObtenerProfesoresDeCursosResult.Respuesta;
                              correctores = {};
                              impartidores = {};
                              a_correctores = [];
                              a_impartidores = [];
                              $.each(respuesta, function(idx, val) {
                                switch (val.sTipoRol) {
                                  case "Corrector":
                                    return correctores[val.idUsuario] = {
                                      id: val.idUsuario,
                                      nombre: val.sApellidosProfesor + ", " + val.sNombreProfesor
                                    };
                                  case "Impartidor":
                                    return impartidores[val.idUsuario] = {
                                      id: val.idUsuario,
                                      nombre: val.sApellidosProfesor + ", " + val.sNombreProfesor
                                    };
                                }
                              });
                              $.each(correctores, function(idx, val) {
                                return a_correctores.push(val);
                              });
                              $.each(impartidores, function(idx, val) {
                                return a_impartidores.push(val);
                              });
                              for (j = i = 0; i <= 14; j = ++i) {
                                if (a_correctores[j] == null) {
                                  a_correctores[j] = {
                                    id: '',
                                    nombre: ''
                                  };
                                }
                                if (a_impartidores[j] == null) {
                                  a_impartidores[j] = {
                                    id: '',
                                    nombre: ''
                                  };
                                }
                              }
                              str_correctores = str_impartidores = '';
                              for (j = k = 0; k <= 14; j = ++k) {
                                indice = j + 1;
                                str_impartidores += "&carry_piid" + (indice.toString().padStart(2, '0')) + "=" + a_impartidores[j].id;
                                str_impartidores += "&carry_pinom" + (indice.toString().padStart(2, '0')) + "=" + a_impartidores[j].nombre;
                                str_correctores += "&carry_pcid" + (indice.toString().padStart(2, '0')) + "=" + a_correctores[j].id;
                                str_correctores += "&carry_pcnom" + (indice.toString().padStart(2, '0')) + "=" + a_correctores[j].nombre;
                              }
                              parser = document.createElement('a');
                              parser.href = xhr_url;
                              my_opi = parser.pathname.split('/');
                              my_opi = my_opi[my_opi.length - 1];
                              id = window.get_parameter_by_name('id', parser.search);
                              id = id.replace('*', UNIR_LTI.CURRENT_USER_SIS_ID);
                              sc = window.get_parameter_by_name('sc', parser.search);
                              ac = window.get_parameter_by_name('ac', parser.search);
                              must_opi = my_opi;
                              if (must_opi[0] === '-') {
                                must_opi = must_opi.substring(1) + '-';
                              }
                              return window.OPINATOR.mustShowOpi(must_opi, id, function() {
                                return window.OPINATOR.showOpi(my_opi, id, sc, ac, 'carry_IdAsignatura=' + encuesta_data.idAsignatura + '&carry_IdGrupo=' + encuesta_data.idGrupo + str_correctores + str_impartidores, null, null, false, false, true);
                              }, function() {
                                if (console) {
                                  return console.log('no mostrar');
                                }
                              });
                            }
                          }
                        });
                      }
                    }
                  });
                }
              }
            });
          });
        }
      });
    }
  };

  window.courseSurveySis = function(course_sis_id) {
    var formated_sis, sis_pieces;
    if (course_sis_id == null) {
      course_sis_id = "";
    }
    if (!course_sis_id.includes("|")) {
      return course_sis_id;
    }
    formated_sis = "";
    sis_pieces = course_sis_id.split('|');
    if (sis_pieces.length === 2) {
      formated_sis = sis_pieces[0];
    } else {
      if (sis_pieces[0] === "0") {
        formated_sis = ("0-" + sis_pieces[1] + "-") + sis_pieces[sis_pieces.length - 1];
      } else {
        formated_sis = sis_pieces[0] + ("-" + sis_pieces[1]);
      }
    }
    return formated_sis;
  };

  window.openModal = function(url, container, min_height, min_width) {
    var encuesta;
    if (min_height == null) {
      min_height = 600;
    }
    if (min_width == null) {
      min_width = 800;
    }
    encuesta = $("<div id=\"dialog" + url + "\" />");
    encuesta.append("<iframe id=\"iframe-" + url + "\" src=\"\"></iframe>");
    container.append(encuesta);
    return encuesta.dialog({
      autoOpen: true,
      modal: true,
      minHeight: min_height,
      minWidth: min_width,
      open: function(ev, ui) {
        $(this).find('iframe').attr('src', url);
        return $(this).find('iframe').addClass('iframe-encuesta');
      }
    });
  };

  window.cleanSurveyCookies = function() {
    var results, survey_cookie, survey_pattern;
    if (!$('.ic-Login').length) {
      return;
    }
    survey_pattern = /^opinator_/i;
    results = [];
    for (survey_cookie in $.cookie()) {
      if (survey_cookie.match(survey_pattern)) {
        results.push($.removeCookie(survey_cookie, {
          path: '/'
        }));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

}).call(this);
(function() {
  window.addDesktopMenuItem = function(arg) {
    var icon, iconHtml, id, itemHtml, ref, target, text, url;
    ref = arg != null ? arg : {}, url = ref.url, text = ref.text, icon = ref.icon, target = ref.target, id = ref.id;
    if (url == null) {
      url = '/';
    }
    if (text == null) {
      text = '';
    }
    if (icon == null) {
      icon = 'icon-document';
    }
    if (target == null) {
      target = '_self';
    }
    if (id == null) {
      id = '';
    }
    iconHtml = "<div class=\"menu-item-icon-container\">\n  <i class=\"" + icon + "\"></i>\n</div>";
    itemHtml = "<li class=\"ic-app-header__menu-list-item \">\n  <a id=\"" + id + "\" href=\"" + url + "\" target=\"" + target + "\" class=\"ic-app-header__menu-list-link\">\n    " + iconHtml + "\n    <div class=\"menu-item__text\">" + text + "</div>\n  </a>\n</li>";
    return $('#menu').append(itemHtml);
  };

  window.RedirectGlobalNavigationSecretaria = function() {
    var default_text, en_text, url;
    url = UNIR_LTI.LOR_SECRETARY_URL;
    default_text = "Secretaría";
    en_text = "Registrar office";
    return addMenuItem({
      url: url,
      text: /^en/.test(ENV.BIGEASY_LOCALE) ? en_text : default_text,
      icon: 'custom-secretary',
      id: 'secretary-link'
    });
  };

  window.RedirectGlobalNavigationNormativaMX = function() {
    var default_text, en_text, url;
    url = UNIR_LTI.NORMATIVE_URL;
    default_text = "Normativa";
    en_text = "Normative";
    return addMenuItem({
      url: url,
      text: /^en/.test(ENV.BIGEASY_LOCALE) ? en_text : default_text,
      icon: 'custom-normative-mx',
      id: 'normative-link',
      target: '_blank'
    });
  };

  window.RedirectGlobalNavigationUnirBiblioteca = function() {
    var default_text, en_text, roles, tipo, url;
    if (!UNIR_LTI.UNIR_BIBLIOTECA_VIRTUAL) {
      return;
    }
    url = '';
    roles = ENV.current_user_roles;
    tipo = '3';
    if (roles) {
      if (roles.indexOf('student') >= 0) {
        tipo = '1';
      }
      if (roles.indexOf('teacher') >= 0) {
        tipo = '2';
      }
    }
    if (UNIR_LTI.CURRENT_USER_TYPE) {
      tipo = UNIR_LTI.CURRENT_USER_TYPE;
    }
    if (UNIR_LTI.CURRENT_USER_SIS_ID) {
      url = "" + UNIR_LTI.BIBLIOTECA_UNIR_LOGIN_URL + UNIR_LTI.CURRENT_USER_SIS_ID;
      url += "?tipoPersona=" + tipo;
    } else {
      url = UNIR_LTI.BIBLIOTECA_UNIR_URL;
    }
    default_text = "Biblioteca";
    en_text = 'Library';
    return addMenuItem({
      url: url,
      text: /^en/.test(ENV.BIGEASY_LOCALE) ? en_text : default_text,
      icon: 'custom-library',
      target: '_blank',
      id: 'library-link'
    });
  };

  window.custom_help_links_actions = function() {
    return $('#nav-tray-portal').on('click', '#help_tray ul li a[target=_blank]', function(e) {
      e.preventDefault();
      return window.location.href = $(this).attr('href');
    });
  };

  window.RedirectGlobalNavigationQuizzes = function() {
    var default_text, en_text, url;
    if (!UNIR_LTI.LOR_QUIZZES_INFO_URL) {
      return;
    }
    url = UNIR_LTI.LOR_QUIZZES_INFO_URL;
    default_text = "Exámenes";
    en_text = "Exams";
    return addMenuItem({
      url: url,
      text: /^en/.test(ENV.BIGEASY_LOCALE) ? en_text : default_text,
      icon: 'custom-quizzes',
      id: 'quizzes-link'
    });
  };

  window.addMenuItem = function(obj_params) {
    var is_mobile;
    if ($('#menu').is(':visible')) {
      return window.addDesktopMenuItem(obj_params);
    } else {
      is_mobile = $('body.touch').length === 1;
      if (is_mobile) {
        return load_external_js('arrive', function() {
          return $('body.touch').arrive('ul.fOyUs_bGBk li a[href="/inbox"]', function() {
            return window.addMobileMenuItem(obj_params);
          });
        });
      }
    }
  };

  window.addMobileMenuItem = function(arg) {
    var icon, iconHtml, id, itemHtml, ref, target, text, url;
    ref = arg != null ? arg : {}, url = ref.url, text = ref.text, icon = ref.icon, target = ref.target, id = ref.id;
    if (url == null) {
      url = '/';
    }
    if (text == null) {
      text = '';
    }
    if (icon == null) {
      icon = 'icon-document';
    }
    if (target == null) {
      target = '_self';
    }
    if (id == null) {
      id = '';
    }
    iconHtml = "<span class=\"mobile_menu\" style=\"width: 3rem;\"><i class=\"" + icon + "\"></i></span>";
    itemHtml = "<li class=\"fOyUs_bGBk jpyTq_bGBk jpyTq_ycrn jpyTq_cYsY\" style=\"padding: 0px; max-width: 100%;\">\n  <a id=\"" + id + "\" href=\"" + url + "\" target=\"" + target + "\" cursor=\"pointer\" class=\"fOyUs_bGBk eHiXd_bGBk eHiXd_brAJ eHiXd_doqw eHiXd_eESV eHiXd_cuTS\" style=\"margin: 0px;cursor: pointer;\">\n    <span class=\"fOyUs_bGBk fOyUs_desw cGJLp_bGBk cGJLp_busO cGJLp_fZWR cGJLp_qOas\">\n      " + iconHtml + "\n      <span class=\"cjUyb_bGBk cjUyb_ycrn cjUyb_eQnG\">" + text + "</span>\n    </span>\n  </a>\n</li>";
    return $("body.touch ul.fOyUs_bGBk").append(itemHtml);
  };

}).call(this);
(function() {
  window.navigationAllWikiPage = function() {
    var admin, student;
    if (!UNIR_LTI.WIKI_PAGES_MENU) {
      return;
    }
    if (ENV.current_user_roles == null) {
      return;
    }
    student = false;
    admin = false;
    ENV.current_user_roles.forEach(function(valor) {
      if (valor === 'student') {
        student = true;
      }
      if (valor === 'admin') {
        return admin = true;
      }
    });
    if ($('#wiki_page_show').length) {
      window.finishAJAXcalls = true;
      return load_external_js('vendor/bootstrap-js', function() {
        var modules_url;
        $('body').prepend('<div id="navWikiPanel" class="accordion nav-wiki-menu" ></div>');
        modules_url = UNIR_LTI.BASE_URL + ("/services/course/" + ENV.COURSE_ID + "/modules");
        return $.getJSON(modules_url, function(data) {
          var buttonHtml, currentPage;
          buttonHtml = $("<a id=\"navWikiPageBoton\" class=\"btn\" href=\"#\">Menu del contenido</a>");
          if (student && !admin) {
            $('#wiki_page_show').prepend("<div class=\"header-bar-outer-container\"> <div class=\"header-bar-container sticky-toolbar\" data-sticky> <div class=\"header-bar flex-container\"> <div class=\"header-bar-left header-left-flex\"></div> <div class=\"header-bar-right\"></div></div> <div class=\"page-changed-alert\" role=\"alert\" aria-atomic=\"true\" aria-live=\"polite\"></div></div></div>");
          }
          $('div.header-bar-right').append(buttonHtml);
          $('#navWikiPageBoton').on('click', function(e) {
            e.preventDefault();
            return $('#navWikiPanel').fadeToggle(250).css('margin-top', $(this).offset().top + $(this).height() + 18).css('right', 24);
          });
          currentPage = 0;
          $.each(data, function(key, val) {
            $('#navWikiPanel').append("<div id=\"grupo" + val.id + "\" class=\"accordion-group hide-head-teme\"> <div class=\"accordion-heading\"> <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\" data-parent=\"#navWikiPanel\" href=\"#aHeadItem" + val.id + "\"> " + val.name + "<span class=\"up-arrow\"></span></a></div></div>");
            $("div#grupo" + val.id).append("<div id=\"aHeadItem" + val.id + "\" class=\"accordion-body collapse body-Nav\"></div>");
            return $.each(val.items, function(key2, val2) {
              if (val2.indent < 2) {
                if (ENV.WIKI_PAGE.title === val2.title) {
                  currentPage = val.id;
                }
                if ((val2.type === 'Page' || val2.type === 'Quiz' || val2.type === 'Assignment') && key2 !== 0) {
                  $("#aHeadItem" + val.id).append("<a class=\"aheaditem-margen list-item-nav\" href=\"" + val2.html_url + "\" class=\"list-item-nav\">" + val2.title + "</a>");
                }
                if (val2.type === 'SubHeader' && key2 !== 0) {
                  return $("#aHeadItem" + val.id).append("<a href=\"#\" class=\"aheaditem-margen list-head-nav\"> " + val2.title + "</a>");
                }
              }
            });
          });
          if (currentPage !== 0) {
            $("#aHeadItem" + currentPage).parent().removeClass('hide-head-teme');
            $("#aHeadItem" + currentPage).addClass('in');
            $('#navWikiPanel').on('show', function(e) {
              return $(e.target).parent().find('span').removeClass("down-arrow").addClass('up-arrow');
            });
            return $('#navWikiPanel').on('hide', function(e) {
              return $(e.target).parent().find('span').removeClass('up-arrow').addClass('down-arrow');
            });
          } else {
            return $('#navWikiPageBoton').remove();
          }
        });
      });
    }
  };

}).call(this);
(function() {
  window.urlCourseId = function(url) {
    var course_id, course_id_pattern, ocurrences;
    course_id_pattern = /\/courses\/([0-9]*)\/(modules|assignment_groups)/i;
    ocurrences = url.match(course_id_pattern);
    course_id = null;
    if (ocurrences) {
      course_id = ocurrences[1];
    }
    return course_id;
  };

  window.cleanCourseCache = function(url, course_id) {
    var reorder_pattern;
    reorder_pattern = RegExp("^(" + UNIR_LTI.CANVAS_URL + ")?/courses/" + course_id + "/(modules|assignment_groups)/([0-9]*)([/]?)(reorder|items)", "i");
    if (reorder_pattern.test(url)) {
      return $.ajax({
        url: UNIR_LTI.CLEAN_CACHE_URL,
        type: 'POST',
        dataType: 'json',
        data: {
          type: 'course',
          course_id: course_id
        }
      });
    }
  };

}).call(this);
(function() {
  window.add_user_source_link = function() {
    var roles;
    if ($('#user-info-fieldsets').length === 0) {
      return;
    }
    roles = window.ENV.current_user_roles;
    if (roles == null) {
      return;
    }
    if (!(roles.includes('admin') || roles.includes('root_admin'))) {
      return;
    }
    return setTimeout(function() {
      var el, link_text, modal_text, url, user_id;
      user_id = ENV.USER_ID;
      url = window.UNIR_LTI.PRIMARY_SOURCE_URL + "/user-canvas-integration/" + user_id + window.UNIR_LTI.PRIMARY_SOURCE_PARAMS;
      link_text = "Asignación en Fuente Primaria";
      modal_text = "Asignación de Login en Fuente Primaria";
      el = " | <a id='primary-source-link' href='#'>" + link_text + "</a>";
      $('#user-info-fieldsets .user_details .links').append(el);
      return $('#primary-source-link').on('click', function(e) {
        e.preventDefault();
        return window.open_act_modal(url, modal_text);
      });
    }, 1000);
  };

  window.add_course_source_link = function() {
    var roles;
    if ($('#course_show_secondary').length === 0) {
      return;
    }
    roles = window.ENV.current_user_roles;
    if (roles == null) {
      return;
    }
    if (!(roles.includes('admin') || roles.includes('root_admin'))) {
      return;
    }
    return setTimeout(function() {
      var course_id, el, link_text, modal_text, url;
      course_id = ENV.COURSE.id;
      url = window.UNIR_LTI.PRIMARY_SOURCE_URL + "/course-canvas-integration/" + course_id + window.UNIR_LTI.PRIMARY_SOURCE_PARAMS;
      link_text = "Asignación en Fuente Primaria";
      modal_text = "Asignaciones en curso";
      el = "<a class='btn button-sidebar-wide' id='primary-source-link' href=#'>" + link_text + "</a>";
      $('#course_show_secondary .course-options').append(el);
      return $('#primary-source-link').on('click', function(e) {
        e.preventDefault();
        return window.open_act_modal(url, modal_text);
      });
    }, 1000);
  };

}).call(this);
(function() {
  window.addActLink = function(template) {
    var act_download, course_id, menu;
    if (!UNIR_LTI.ACT_LINK) {
      return;
    }
    menu = $('#gradebook-actions');
    if (menu.length && (ENV.current_user_roles.includes('teacher') || ENV.current_user_roles.includes('admin'))) {
      course_id = ENV.GRADEBOOK_OPTIONS.context_id;
      act_download = function(assignment_type) {
        var act_generate_url_, section_id, section_name, selected_section, token;
        section_name = $('#sections-filter-container input[role=combobox]').val();
        if (!section_name) {
          alert("Debe habilitar el Filtro de Secciones antes de generar el Acta");
          return;
        }
        selected_section = ENV.GRADEBOOK_OPTIONS.sections.find(function(section_obj) {
          return section_obj.name === section_name;
        });
        if (!!selected_section) {
          section_id = selected_section.id;
          token = btoa(JSON.stringify(window.ENV.current_user));
          act_generate_url_ = UNIR_LTI.ACT_POPUP_URL;
          act_generate_url_ += "/" + course_id + "/" + section_id + "/" + assignment_type + "/" + template;
          act_generate_url_ += "?tk=" + token;
          return open_act_modal(act_generate_url_);
        } else {
          return alert("Debe seleccionar una Sección antes de generar el Acta");
        }
      };
      return $.ajax({
        url: UNIR_LTI.ACT_OPTIONS_URL + ("/" + course_id),
        dataType: 'json',
        type: 'get',
        success: function(data) {
          return data.forEach(function(el) {
            var el_text, html;
            el_text = el === 'ordinary' ? 'Ordinaria' : 'Extraordinaria';
            html = "<a class=\"ui-button\" id=\"act-generate-link-" + el + "\" href=\"#\">Generar Acta " + el_text + "</a>";
            menu.append(html);
            return $("#act-generate-link-" + el).on('click', function(e) {
              e.preventDefault();
              return act_download(el);
            });
          });
        }
      });
    }
  };

  window.open_act_modal = function(url, modal_title) {
    var modal_container;
    if (modal_title == null) {
      modal_title = null;
    }
    modal_container = $("<div id='dialog" + url + "' />");
    modal_container.append("<iframe class='act-iframe' id='iframe-" + url + "' src=''></iframe>");
    $('body').append(modal_container);
    return modal_container.dialog({
      autoOpen: true,
      modal: true,
      minHeight: 700,
      minWidth: 950,
      resizable: false,
      title: modal_title,
      open: function(ev, ui) {
        var $iframe;
        $iframe = $(this).find('iframe');
        $iframe.attr('src', url);
        $iframe.css('height', '640px').css('width', '100%').css('border', '0');
        return $iframe.load(function() {
          return $iframe.removeClass('act-iframe');
        });
      }
    });
  };

}).call(this);
(function() {
  window.addQuizzesInformation = function() {
    var $course_grades, $course_table, html;
    if (!UNIR_LTI.QUIZZES_INFORMATION) {
      return;
    }
    html = '<h2>Exámenes</h2>';
    html += '<table class="course_details quizzes_information">';
    html += '<tbody>';
    html += '<tr>';
    html += "<td class='course'><a href='" + UNIR_LTI.LOR_INFORMATION_QUIZZES_URL + "'>Preguntas Frecuentes</a></td>";
    html += '</tr>';
    html += '<tr>';
    html += "<td class='course'><a href='" + UNIR_LTI.LOR_QUIZZES_REQUEST_URL + "'>Inscripción</a></td>";
    html += '</tr>';
    html += '</tbody>';
    html += '</table>';
    $course_table = $('.student_grades');
    if ($course_table.length) {
      $course_table.after(html);
    }
    $course_grades = $('body[class=^context-course_].grades #content');
    if ($course_grades.length && ENV.GRADEBOOK_OPTIONS === null) {
      return $course_grades.append(html);
    }
  };

}).call(this);
(function() {
  window.remove_status_selector = function() {
    $('#SubmissionTray__Content #SubmissionTray__RadioInputGroup').next().remove();
    return $('#SubmissionTray__Content #SubmissionTray__RadioInputGroup').remove();
  };

  window.remove_policies_tab = function() {
    var policies_tabs;
    policies_tabs = $('div[role=tablist] div[role=tab]');
    policies_tabs[1].click();
    $('#' + policies_tabs[0].getAttribute('aria-controls')).remove();
    return $(policies_tabs[0]).remove();
  };

  if ($('.assignment-gradebook-container').length) {
    load_external_js('arrive', function() {
      return $(document).arrive('span[dir=ltr] span[role=dialog] div[role=tablist]', function(policy_tabs) {
        return window.remove_policies_tab();
      });
    });
    load_external_js('arrive', function() {
      return $(document).arrive('span[dir=ltr] div[role=dialog] div.SubmissionTray__Container #SubmissionTray__Content', function(tray) {
        return window.remove_status_selector();
      });
    });
  }

}).call(this);
(function() {
  window.unirPostAjaxProcess = function() {
    return window.unirChangeTranslations();
  };

  window.unirPostProcess = function() {
    window.unirChangeTranslations();
    window.add_user_source_link();
    window.add_course_source_link();
    window.translate_workaround();
    return $('#global_nav_profile_link').mouseenter();
  };

  window.translate_workaround = function() {
    return load_external_js('arrive', function() {
      $(document).arrive('#nav-tray-portal div[role="dialog"] .tray-with-space-for-global-nav h2', function(tray) {
        return window.unirChangeTranslations();
      });
      return $(document).arrive('#right-side-wrapper', function(tray) {
        return window.unirChangeTranslations();
      });
    });
  };

  window.finishAJAXcalls = false;

  $(document).ajaxComplete(function(event, xhr, settings) {
    if (window.finishAJAXcalls === false) {

    }
  });

  window.getCurrentUserSisID();

  $.xhrPool = [];

  $.ajaxSetup({
    beforeSend: function(jqXHR, jqRequest) {
      return $.xhrPool.push(jqXHR);
    },
    complete: function(jqXHR) {
      var index;
      index = $.inArray(jqXHR, $.xhrPool);
      if (index > -1) {
        $.xhrPool.splice(index, 1);
        if ($.xhrPool.length === 0) {
          return window.unirPostAjaxProcess();
        }
      }
    }
  });

  $(function() {
    $.extend({
      redirectPost: function(location, args) {
        var form;
        form = $('<form></form>');
        form.attr("method", "post").attr("action", location).attr("target", "_blank");
        $.each(args, function(key, value) {
          var field;
          field = $('<input></input>');
          field.attr("type", "hidden").attr("name", key).attr("value", value);
          return form.append(field);
        });
        return $(form).appendTo('body').submit();
      }
    });
    $('a[href*="lab.edix.com"]').click(function() {
      var redirect;
      redirect = this.href;
      $.redirectPost(redirect, {
        "c_user_id": ENV.current_user.id,
        "c_name": ENV.current_user.display_name,
        "c_url": window.location.href,
        "redirect": redirect
      });
      return false;
    });
    if ($('#dashboard').length) {
      opinatorEncuestaGeneral();
    }
    if ($('body[class=^context-course_].home')) {
      opinatorEncuestaAsignatura();
    }
    window.unirPostProcess();
    return RedirectGlobalNavigationQuizzes();
  });

}).call(this);
// Modificaciones para soportar la nueva interface responsive de Canvas LMS
// Version rapida para CUNIMAD














;
