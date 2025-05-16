(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"data":{"displayTooltipInTouchScreens":true,"locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"speechOnInfoWindow":false,"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1,"rate":1},"defaultLocale":"en","history":{},"name":"Player479"},"propagateClick":false,"hash": "c619d582461e56234aaf44604950f7646e569afa8ef76febc097b79db432b79b", "definitions": [{"class":"PlayList","items":[{"class":"Model3DPlayListItem","media":"this.model_E4961278_C233_DF82_41E6_959CAB09446E","end":"this.trigger('tourEnded')","player":"this.MainViewerModel3DPlayer","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)"}],"id":"mainPlayList"},{"playbackBarHeadBorderRadius":0,"progressRight":"33%","playbackBarHeadBorderColor":"#000000","progressOpacity":0.7,"subtitlesFontColor":"#FFFFFF","playbackBarBorderSize":0,"progressBarBackgroundColorRatios":[0],"vrPointerSelectionColor":"#FF6600","subtitlesTop":0,"subtitlesTextShadowColor":"#000000","toolTipShadowColor":"#333138","progressBarBackgroundColorDirection":"horizontal","subtitlesFontSize":"3vmin","toolTipFontSize":"1.11vmin","playbackBarBackgroundOpacity":1,"progressBarBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","height":"100%","subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundOpacity":0.2,"subtitlesBottom":50,"toolTipPaddingRight":6,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundColor":["#000000"],"progressBottom":10,"progressHeight":2,"playbackBarHeadHeight":15,"progressBorderSize":0,"firstTransitionDuration":0,"playbackBarLeft":0,"playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"toolTipFontFamily":"Arial","toolTipPaddingTop":4,"progressBarBorderRadius":2,"subtitlesFontFamily":"Arial","class":"ViewerArea","playbackBarHeadBackgroundColor":["#111111","#666666"],"width":"100%","id":"MainViewer","surfaceReticleColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","toolTipPaddingLeft":6,"playbackBarBottom":5,"progressBarBorderSize":0,"toolTipFontColor":"#606060","vrPointerSelectionTime":2000,"propagateClick":false,"playbackBarHeadShadowColor":"#000000","progressBorderRadius":2,"vrPointerColor":"#FFFFFF","toolTipPaddingBottom":4,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeight":10,"playbackBarHeadWidth":6,"progressLeft":"33%","subtitlesGap":0,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"subtitlesBackgroundColor":"#000000","playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"data":{"name":"Main Viewer"},"vrThumbstickRotationStep":20,"playbackBarHeadShadowOpacity":0.7,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"playbackBarProgressBackgroundColorRatios":[0],"toolTipTextShadowColor":"#000000","toolTipBorderColor":"#767676","playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","progressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","subtitlesTextShadowOpacity":1,"minWidth":100,"minHeight":50},{"antialiasingLevel":0.3,"label":trans('model_E4961278_C233_DF82_41E6_959CAB09446E.label'),"surfaceReticleRadius":0.02,"surfaceReticleMinRadius":15,"data":{"label":"Sandstone","showOnlyHotspotsLineSight":true,"showOnlyHotspotsLineSightInPanoramas":true,"keepModel3DLoadedWithoutLocation":true},"objects":[],"castShadow":true,"lights":["this.light_E4C813E6_C233_DC8E_41E0_DDC7A4DE425B","this.light_E4C9D3E6_C233_DC8E_41C5_5FF8F725F0EB"],"model":"this.res_E480D279_C233_DF82_41D1_B2E1562B5E75","floorRadius":0.46,"surfaceReticleMaxRadius":50,"surfaceSelectionCoef":2,"camera":"this.cam_E4D813E5_C233_DC82_41D7_71603E7E99DB","backgroundColor":"#333333","thumbnailUrl":"media/model_E4961278_C233_DF82_41E6_959CAB09446E_t.jpg","class":"Model3D","sphericalHarmonicsMaxDegree":3,"id":"model_E4961278_C233_DF82_41E6_959CAB09446E","environmentIntensity":0.5},{"minWidth":1,"tabIndex":0,"left":"1%","verticalAlign":"middle","pressedBackgroundColorRatios":[0],"layout":"horizontal","iconWidth":0,"iconHeight":0,"rollOverShadow":false,"pressedBackgroundColor":["#DB9B4D"],"rollOverFontColor":"#DB9B4D","rollOverBackgroundOpacity":0,"fontWeight":"bold","backgroundColorRatios":[0],"paddingLeft":0,"height":29.5,"width":57,"rollOverBackgroundColorRatios":[0],"paddingRight":0,"fontSize":14,"data":{"name":"Button house info"},"borderColor":"#000000","pressedFontColor":"#000000","label":trans('Button_F29AEDC6_C230_C48E_41E5_9F07D0D93E66.label'),"pressedBackgroundOpacity":0,"fontColor":"#FFFFFF","horizontalAlign":"center","click":"this.startMeasurement(null, this.measure_F5A3E080_C250_7C82_41D3_5017DA46A918)","paddingTop":0,"backgroundColor":["#000000"],"fontFamily":"Cinzel Bold","backgroundOpacity":0,"class":"Button","paddingBottom":0,"id":"Button_F29AEDC6_C230_C48E_41E5_9F07D0D93E66","rollOverBackgroundColor":["#DB9B4D"],"top":"14.92%","minHeight":1},{"minWidth":1,"tabIndex":0,"left":"0.13%","verticalAlign":"middle","pressedBackgroundColorRatios":[0],"layout":"horizontal","iconWidth":0,"iconHeight":0,"rollOverShadow":false,"pressedBackgroundColor":["#DB9B4D"],"rollOverFontColor":"#DB9B4D","rollOverBackgroundOpacity":0,"fontWeight":"bold","backgroundColorRatios":[0],"paddingLeft":0,"height":14.7,"width":122.7,"rollOverBackgroundColorRatios":[0],"paddingRight":0,"fontSize":14,"data":{"name":"Button house info"},"borderColor":"#000000","pressedFontColor":"#000000","label":trans('Button_F6843ACF_C231_CC9E_41E6_07DB31EA8EA6.label'),"pressedBackgroundOpacity":0,"fontColor":"#FFFFFF","horizontalAlign":"center","click":"this.cleanAllMeasurements(null)","paddingTop":0,"backgroundColor":["#000000"],"fontFamily":"Cinzel Bold","backgroundOpacity":0,"class":"Button","paddingBottom":0,"id":"Button_F6843ACF_C231_CC9E_41E6_07DB31EA8EA6","rollOverBackgroundColor":["#DB9B4D"],"top":"37.9%","minHeight":1},{"class":"Model3DPlayer","viewerArea":"this.MainViewer","id":"MainViewerModel3DPlayer"},{"bottom":"32.88%","data":{"name":"Container2642"},"right":"12.75%","propagateClick":false,"gap":10,"minWidth":20,"children":["this.Button_F29AEDC6_C230_C48E_41E5_9F07D0D93E66","this.Button_F6843ACF_C231_CC9E_41E6_07DB31EA8EA6","this.Button_F6CAEDD7_C230_448E_41D4_F880B3D15FD4"],"scrollBarMargin":2,"backgroundColorRatios":[0,1],"width":"12.613%","height":"29.973%","layout":"absolute","scrollBarColor":"#000000","backgroundColor":["#FFFFFF","#FFFFFF"],"backgroundOpacity":0.3,"class":"Container","id":"Container_F048D710_C230_4582_41E6_EF75A385AA72","overflow":"scroll","minHeight":20},{"minWidth":1,"tabIndex":0,"left":"0.38%","verticalAlign":"middle","pressedBackgroundColorRatios":[0],"layout":"horizontal","iconWidth":0,"iconHeight":0,"rollOverShadow":false,"pressedBackgroundColor":["#DB9B4D"],"rollOverFontColor":"#DB9B4D","rollOverBackgroundOpacity":0,"fontWeight":"bold","backgroundColorRatios":[0],"paddingLeft":0,"height":21.5,"width":104.1,"rollOverBackgroundColorRatios":[0],"paddingRight":0,"fontSize":14,"data":{"name":"Button house info"},"borderColor":"#000000","pressedFontColor":"#000000","label":trans('Button_F6CAEDD7_C230_448E_41D4_F880B3D15FD4.label'),"pressedBackgroundOpacity":0,"fontColor":"#FFFFFF","horizontalAlign":"center","click":"this.stopMeasurement(null)","paddingTop":0,"backgroundColor":["#000000"],"fontFamily":"Cinzel Bold","backgroundOpacity":0,"class":"Button","paddingBottom":0,"id":"Button_F6CAEDD7_C230_448E_41D4_F880B3D15FD4","rollOverBackgroundColor":["#DB9B4D"],"top":"27.22%","minHeight":1},{"useHandCursor":false,"labelFontFamily":"Arial","labelFontColor":"#FFFFFF","areaColor":"#FFFFFF","lineColor":"#00FF00","data":{"label":"Object"},"pointColor":"#FFFFFF","areaOpacity":0.5,"type":"multiple","labelFontSize":"12px","pointMinRadius":5,"class":"MeasureModel3DObject","id":"measure_F5A3E080_C250_7C82_41D3_5017DA46A918","pointMaxRadius":5},{"yaw":-45,"mode":"fixed_to_camera","class":"OrbitLight","shadowTolerance":2,"intensity":0.84,"id":"light_E4C813E6_C233_DC8E_41E0_DDC7A4DE425B","castShadow":true,"pitch":-8},{"yaw":135,"class":"OrbitLight","shadowTolerance":2,"intensity":0.3,"id":"light_E4C9D3E6_C233_DC8E_41C5_5FF8F725F0EB","castShadow":true,"pitch":75},{"class":"Model3DResource","id":"res_E480D279_C233_DF82_41D1_B2E1562B5E75","levels":[{"class":"Model3DResourceLevel","url":"media/model_E4961278_C233_DF82_41E6_959CAB09446E/scene.glb"},{"class":"Model3DResourceLevel","tags":"mobile","url":"media/model_E4961278_C233_DF82_41E6_959CAB09446E/scene_mobile.glb"}]},{"minZ":-0.56,"vrEnabled":true,"initialZ":0.12,"maxZ":0.81,"minX":-0.65,"initialDistance":0.38,"initialY":0,"maxX":0.66,"minY":-0.21,"maxY":0.2,"minDistance":0.09,"maxDistance":0.76,"initialPitch":-30,"class":"OrbitModel3DCamera","id":"cam_E4D813E5_C233_DC82_41D7_71603E7E99DB","autoNearFar":true,"doubleClickAction":"none"}],"gap":10,"minWidth":0,"scrollBarMargin":2,"backgroundColorRatios":[0],"width":"100%","children":["this.MainViewer","this.Container_F048D710_C230_4582_41E6_EF75A385AA72"],"defaultMenu":["fullscreen","mute","rotation"],"height":"100%","layout":"absolute","scripts":{"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getKey":TDV.Tour.Script.getKey,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaByName":TDV.Tour.Script.getMediaByName,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"downloadFile":TDV.Tour.Script.downloadFile,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"setValue":TDV.Tour.Script.setValue,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"translate":TDV.Tour.Script.translate,"showWindow":TDV.Tour.Script.showWindow,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"clone":TDV.Tour.Script.clone,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"init":TDV.Tour.Script.init,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"startMeasurement":TDV.Tour.Script.startMeasurement,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"shareSocial":TDV.Tour.Script.shareSocial,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMainViewer":TDV.Tour.Script.getMainViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"quizStart":TDV.Tour.Script.quizStart,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"cloneBindings":TDV.Tour.Script.cloneBindings,"setLocale":TDV.Tour.Script.setLocale,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"createTween":TDV.Tour.Script.createTween,"executeJS":TDV.Tour.Script.executeJS,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"quizFinish":TDV.Tour.Script.quizFinish,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showPopupImage":TDV.Tour.Script.showPopupImage,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"mixObject":TDV.Tour.Script.mixObject,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"enableVR":TDV.Tour.Script.enableVR,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"initAnalytics":TDV.Tour.Script.initAnalytics,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"disableVR":TDV.Tour.Script.disableVR,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"initQuiz":TDV.Tour.Script.initQuiz,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"playAudioList":TDV.Tour.Script.playAudioList,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"toggleVR":TDV.Tour.Script.toggleVR,"registerKey":TDV.Tour.Script.registerKey,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"openLink":TDV.Tour.Script.openLink,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getOverlays":TDV.Tour.Script.getOverlays,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"existsKey":TDV.Tour.Script.existsKey,"getPixels":TDV.Tour.Script.getPixels,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer},"downloadEnabled":true,"scrollBarColor":"#000000","backgroundColor":["#FFFFFF"],"class":"Player","id":"rootPlayer","start":"this.init()","minHeight":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.1, Fri May 16 2025