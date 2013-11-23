angular.module('mean.images').controller('ImagesController', ['$scope', '$routeParams', '$location', 'Global', 'Images', '$http', function ($scope, $routeParams, $location, Global, Images, $http) {
    $scope.global = Global;

    $scope.create = function() {
        var image = new Image({
            title: this.title,
            url: this.url
        });
        image.$save(function(response) {
            $location.path("images/" + response._id);
        });

        this.title = "";
        this.content = "";
    };

    $scope.remove = function(image) {
        image.$remove();

        for (var i in $scope.images) {
            if ($scope.images[i] == image) {
                $scope.images.splice(i, 1);
            }
        }
    };

    $scope.update = function() {
        var image = $scope.image;
        if (!image.updated) {
            image.updated = [];
        }
        image.updated.push(new Date().getTime());

        image.$update(function() {
            $location.path('images/' + image._id);
        });
    };

    $scope.find = function() {
        //THIS FAKES IT ALL
        $scope.images = [];
        var img = {
            'created' : new Date(),
            'user' : {
                'name' : 'j-dawg'
            },
            'title' : 'the title',
            'bgurl' : 'http://placekitten.com/320/321',
            'drawingurl' : 'data:image/jpeg,%FF%D8%FF%E0%00%10JFIF%00%01%01%00%00%01%00%01%00%00%FF%FE%00%3BCREATOR%3A%20gd-jpeg%20v1.0%20%28using%20IJG%20JPEG%20v62%29%2C%20quality%20%3D%2065%0A%FF%DB%00C%00%0B%08%08%0A%08%07%0B%0A%09%0A%0D%0C%0B%0D%11%1C%12%11%0F%0F%11"%19%1A%14%1C%29%24%2B%2A%28%24%27%27-2%407-0%3D0%27%278L9%3DCEHIH%2B6OUNFT%40GHE%FF%DB%00C%01%0C%0D%0D%11%0F%11%21%12%12%21E.%27.EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE%FF%C0%00%11%08%01%40%01A%03%01"%00%02%11%01%03%11%01%FF%C4%00%1F%00%00%01%05%01%01%01%01%01%01%00%00%00%00%00%00%00%00%01%02%03%04%05%06%07%08%09%0A%0B%FF%C4%00%B5%10%00%02%01%03%03%02%04%03%05%05%04%04%00%00%01%7D%01%02%03%00%04%11%05%12%211A%06%13Qa%07"q%142%81%91%A1%08%23B%B1%C1%15R%D1%F0%243br%82%09%0A%16%17%18%19%1A%25%26%27%28%29%2A456789%3ACDEFGHIJSTUVWXYZcdefghijstuvwxyz%83%84%85%86%87%88%89%8A%92%93%94%95%96%97%98%99%9A%A2%A3%A4%A5%A6%A7%A8%A9%AA%B2%B3%B4%B5%B6%B7%B8%B9%BA%C2%C3%C4%C5%C6%C7%C8%C9%CA%D2%D3%D4%D5%D6%D7%D8%D9%DA%E1%E2%E3%E4%E5%E6%E7%E8%E9%EA%F1%F2%F3%F4%F5%F6%F7%F8%F9%FA%FF%C4%00%1F%01%00%03%01%01%01%01%01%01%01%01%01%00%00%00%00%00%00%01%02%03%04%05%06%07%08%09%0A%0B%FF%C4%00%B5%11%00%02%01%02%04%04%03%04%07%05%04%04%00%01%02w%00%01%02%03%11%04%05%211%06%12AQ%07aq%13"2%81%08%14B%91%A1%B1%C1%09%233R%F0%15br%D1%0A%16%244%E1%25%F1%17%18%19%1A%26%27%28%29%2A56789%3ACDEFGHIJSTUVWXYZcdefghijstuvwxyz%82%83%84%85%86%87%88%89%8A%92%93%94%95%96%97%98%99%9A%A2%A3%A4%A5%A6%A7%A8%A9%AA%B2%B3%B4%B5%B6%B7%B8%B9%BA%C2%C3%C4%C5%C6%C7%C8%C9%CA%D2%D3%D4%D5%D6%D7%D8%D9%DA%E2%E3%E4%E5%E6%E7%E8%E9%EA%F2%F3%F4%F5%F6%F7%F8%F9%FA%FF%DA%00%0C%03%01%00%02%11%03%11%00%3F%00%F5%9A%28%A2%B3%18QE%14%00QE%00%83%D0%E6%98%05%14R%D3%10TOu%0CR%ACo%2A%AB%B0%C8Ry%AC%FDm%AF%84%1F%E8m%1A%20R%5C%96%21%8FN%06%3Aq%93%9Fj%AF-%9D%BE%A5ok%7D8PS%99C%1E0%01%C89%F7%FET%D3W%B3.%2A7%F7%99%BB%9C%D2%D4p%BA%BCJ%C9%F7H%E3%8CS%E9%90%15%CC%EBW%F1%C1%A8%1D%C7%2A%88X%8C%F5%3D%00%F6%FE%2A%E9%25p%913%1E%C35%C0%DD%C6%B7D%DDL%E7d%87%CC%DAA%20%27%BF%D7%9A%C6%AB%D2%C6%D4%96%B76%3C%2B%11%BB%9A%7DJe%C3%FD%C5%F4%1D%C9%1F%A7%E4k%5E%E7%5E%D3%EDe1%3D%CA%19W%AA%21%C9%1F_O%C6%B8%8B%0D%3F%C5%1A%CCAb%94%D8i%ECI%1B%BEB%C0%9C%E7%03%E6%FC%F1%5DN%89%E1%2B%3D%1DC%B9%FBD%FF%00%DFq%80%3E%83%B7%EBN%29%A8%D9%11-%5D%D9%97%AE%EB%F7wV%F1%C1a%0B%29%B8q%1Ce%F27%93%E8%7B%FE%15%BBab%96%16%F1%DB%A7%3B%00%DC%DD%DD%BB%93%EEMU%7B%21%7D%E2%D8%AE%18%E6%3B%28%89%0B%E8%ED%C6%7F%2A%D3%DE%A2Wb%40%19%EBI%AE%ACw%E8%8B%80%60%01EA%0D%F5%BD%C3%15%8ATr%3B%03RH%F8%ABmt"%C3dj%10%002zTc%93%92x%AE%7FX%D5e%BBo%B1%D9%3E%C8%8E%7C%C9%FB%01%DC%FF%00%9E%A6%A2%F6.%C5%B9%AF%12%5B%99n%B86%D6yT%E7%EF%C8%7F%CF%EBY6PI%E2%7DT%DC%CF%93g%0Bt%EC%CD%D8%0FaU%E4%DF%A8%BC%3AV%99%B9a%88%80%ED%8C%ED%1D%D8%9FS%5D%A5%85%8C%3A%7D%A2%5B%DB%AE%D4A%D2%92%5C%C0%DD%8A%D7%EA%15%40%03%81Y2%D6%C6%A3%D2%B1%E5%18%CDX%91%5D%81%3D%01%1D%EA%26%E7uL%FE%BF%CA%A0b%3Eo%E5%40%10%B6%00%EBQ%B7Bq%93R9%04%00%3A%83%C8%A8%98%9E%87%8AC%21nA"%A3R%1B%3C%E7%153.W%03%BDW%85v%02%B8%A4%00ynzR%10%09%E2%9C%C3%9Ei%AC%C1%14%93%40%15%AE%A5%11%21%1D%CDd%3F%DE%24%F7%A9%EEe%F3_%3D%85W9%27%DA%AD%09%8D%2B%C6j%BC%8B%93%8A%B0%ED%D8TX%E6%81%15%D50%D50%E6%A4%28%00%CD3%18%A1%00b%8A_%C2%8A%00%F7JZJZ%40%14QE%02%28%EA%97%ABel%CF4N%F0%95%3B%8ArEd%E8%D2Ciy7%97p%EFl%D1%82%A6G%CFF%20%9E%BE%84s%DF%19%AD%1Dz%C6%E3Q%D3%DA%DE%DEa%08o%BE%C4d%91%E9%F9%E2%B0%F4%BBXm-lnn%1F%08%AA%C8%DB%B1%B5%837%0D%F4%FF%00%EBT%BD%C7%A5%8E%BF%23%19%AA%96%9A%A5%B5%F4%D2El%E6C%18%05%98%29%DB%CFNi%FE%5B%A5%A8%8E%DD%C1%3C%05f%E7h%FE%B8%15%9B%1AY%C7%AFb%19%9F%ED%12F%15%C2%9E%3EC%C6%7F2%2A%EE-%0D%89%01%28%C0c8%E3%3D%2B.%D6%D9%21%84%99%25k%89%25m%EF%29%E0%12%0Ep%07a%EDW%AF%9Fe%9C%84%24%AF%C61%17%DE%C7%B5s-%AD%DB%5EN%F6%E6C%05%A4%60F%B1%80A9%04s%8E%9FO%C6%A6rKq%1A%BA%8D%CD%E7%D9e%9A%16xDC%2A%8B%1E%E6%93%FF%00%ADP%E8%17%B7%2F%A3%DCOt%5DdV%273%83%9E%83%9F%A7%D2%8F%B6%C0%DFdK9D%B1%CD%21U%04%97%04%01%92rO%1Czf%B2%A6%D6%DA%E7Q%BC%82%08%C2%C4%E5%01s%CA%8E%DB%8F%1C%0E%9C%7D%3Di%7BK%23E5%C9%C9n%BB%97u%3DnIl%12%DE%5Bf%8AY%C8WP%C0%90%A7%AE9%FC%2A%B6%9F%14w%BA%8D%BC%5Bv%C6%9F%3B%21%EC%14%0C%03%F8%91M%D6%AC%A1%B2%B8%B2%08%D9%941w%91%8F%2CpO%F4%E3%D2%A5%D2%A0%5B%8B%EB%D9%212%00%C5c%0D%1Ex%1D%5B%07%DF%02%B2wsW4m%28%E8up%CD%1C%F1%87%85%D5%D3%24eNG%07%06%96F%0A%84%9E%95%5BO%8E%18%2C%80%84%10%A39%DC%06r%3A%E7%1D%EA%B6%A7p%D3J%B66%AE%04%D2%0F%98%F5%D8%BE%A6%BA%5B%B20J%EC4%F2V%CEk%B6%FB%D7%0EXg%B0%E8%2B%17Y%BE%F2%94D%1B%1D%DB%FAV%A5%C4%CB%16%DBx%FE%E4%20%2F%D6%B8%CD%5E%E7%CC%D4Xg%82%DD%2B%19%BE%86%B1W%D4%13T%96%DE%E9%24%8D%8A%95%3C%1A%EC%23%D6%E1%96%D29%86%5D%DC%EDX%D3%96%27%D2%B8k%A8%B3%08%7D%DBW%B0%AB%BA%0E%A1-%A4%8C%23%01%8B%29%0B%BB%D6%A7b%AD%7DN%8BP%92a%03I%A8K%E5%21%FB%B6%B17%27%FD%E6%FF%00%0A%E6-%E4%BB%D4%EE%DA%D3N%87%8F%E3%93%3C%28%FF%00%EBT%F6%D6%BA%97%8A.K%16%29%088w5%DC%E9ZM%BE%93j%21%B7_vc%D5%8F%BDR%5C%C4%B7a%BA%3E%93%0E%93f%B0%C42%E7%97s%D5%8Dh%D1El%95%8C%5B%B9%9B%A8%F5%15%911%03%3E%95%AF%A9u%15%8F%2FZ%96_B%07%CFl%D4G%ABf%A4nI%EDQ%1E%F4%01%03c%7Bz%90%29%8C7%1A%91%FA%F1Q%B1%00z%9AC%12%3C%07%00%D5yI%0D%F2%F4%CFZ%98%7D%EA%8D%85%20%21c%93%EDY%B7wE%D8%A2%F4%15v%EEo-0%3A%9A%C89sM%08%60%F9%A9%18%E3%81Ol%2A%E2%A1%1F3%1A%A1%0C%DB%F3d%D2%E3%26%94%AF4%80%81%40%08%C7%B54%D2%10I%A5%02%81%0BE%184S%19%EET%B4%94%B5%00%15%1D%C4%F1%DA%C0%F3L%C1%23%8C%16f%3D%80%A9%2A%8E%AA%96%F762%DB%CE%C0%AC%83%05pN%7F%01O%60J%E4%13k%F6%ABf%B7%11%24%F7%114%9EVa%8C%B1%CF%AE%3D%3D%EB%9C%BER%D2%EBV%AA%A4%AC%16%B1%98%01%FE%10%A0%1F%EBT%BF%B3u%04l%DB%B7%90%DB%BEy%0D%CB%0F1G%03%E5%19%C7J%D5%BF%D9r%C4%AA%187B%C2i%95%B0X%E0c%3E%A0u%C7%B0%1D%2B%274%CBtd%D5%D2.%DA%EA%FB%B4%26%96%09W%04%15Ie8%08%DD%08o%A1%FC%FF%00%9E%26%9B%7D%12%5E%1B%A8%8Al%FB9%82%23%3C%9BZV%05%89lu%1B%8F%E3Y%F0%DBM%05%9E%0D%CC%A2%CC%B3%BB%A6xc%9E8%F7%E3%F2%CF%D65%B3N%27%89%82%C9%21%F2%97%A6QI%FDO%1D%7D%BAVR%AB%D8%8Fg%2B%9B%B3x%99%C9%8Fd%98%11%FC%CE%92%10%00%C8%3C%123%9EO%A7%A5s%97l%D6Q%DA%B7%94%D0%C7%28I%1F%27%217%9C%00%00%3E%81%8F%3E%82%B7%2C%BC%3D%A66%1Ex%CC%AC%19%9B%0C%DCu%E3%8F%C0U%AF%B3X%0F4%B4I8E%2F%1A%B7%CC%C0z%8A%CD%C9%B5%EF%1B%3A%0Dh%CC%F9%E5%BC%40%23%B7%8D7%C6Y%DCg%1Br%B8%C2%9Cu%F9MV%B6%FBQ%D3n%A2%8EGY%EE%5B%1Br%10%0E%08%C9%CFP1%DB%AF%E9S%CE%0A%C3q%0D%B7%EE%25y%D1%01%FE%EF%0A%C4%FF%00%3A%B1c%A6%C5z%90%DC%C8X%F9y%01%01%E1H5%9C%1C%91%95%3A%5C%D2h%A7%2C%CD%7Fp%8F9%12%BA%21%DC%A4%E7%9C%E0q%DB%A1%FC%E9%D6ZV%AF%7B%1C%B7zF%A0m%EE-%9Bg%94%3AK%F2%823%9E%3D%B9%15%BDki%05%BCg%CC%85%0B%B7S%8C%FD%2A%CD%9B%C5fX%5B%A2%C4%1F%05%B6%8Cg%03%02%B7%83JI%B3%A6T%5B%D8%C3O%18j%BA%28%10k%9A%5E%D9%24%C9Y%10%85%0C%7FQ%FEzU%8D%07W%B7%82%DAK%99%E6CyvL%8E%CE%D8%DB%E8%A0%1FJ%B9%7D%0D%86%A1p%93%5ED%93I%17%DCi9%DB%F8t%AA7%1An%950U%96%14%018%5C1%1F%D6%B4u5%D0%85BE%F9Yv3%97%1D%09%CEk%8C%91%BC%EB%C6%3B%0B%1D%DC%E0%FF%00%3A%DE%92%DA%DA%10%E2%DC%B9dC%F7%9F%20%0E%9F%D6%B0aD.%09bI%E7%DA%92w%1B%8F.%85%A9m%9Au%19%2A8%F6%C7%F3%A6%DBB%F6%FC%9E%DD%2A%D7%DA-%A2P%7C%BF2%5Cq%9C%60%7B%D2%2C%82%7C%19%08%0B%9Ep1%5Bia%2B%9D%BE%832O%A5%C4%CA%A1H%18%60%07z%D3%AEKB%BE6%FA%88%81%F0%B6%D2%26%11%C9%EA%DDq%F9f%BA%C0%CA%DD%08%3FJ%A8%3D%0Cf%AC%C5%A2%8A%2A%C835%3F%BC%B5%91%29%E7%A5k%EA%9Fy9%ACy%3B%D42%D6%C4%0C%09%3Dzv%C5D%DDjF%1C%81%C6j68%3C%9A%06B%D8-P%91%96%1E%A6%A7a%CE%2A.%FCT%81%13%E7%B9%E6%A1%99%D6%25%24%9E%40%A9%9F%0B%D3%BDgj2%02%CA%8Ar1%92i%D8E%29%E5i%9C%9E%D5%09%F9G%BD9%BDj3%B8%9C%F6%AA%10%D6%05%BA%D3%19%B1%D2%A5%23%23%14%D2%A1h%02%12%C6%A2%DC%7C%CCU%82%B9%EDQ%94%F9%F3H%00%F1H%0EM8%9AE%1C%D3%01sE%3B%06%8A%00%F6%FAl%92%2CQ%B3%B9%C2%A8%C94%EA%C4%F1dz%84%DA%0C%EB%A5.%EB%8E%08%1D%C8%EF%8Fz%90%28%EA%5E%23%DB%9C%3A%C5%1F%AB63X%13x%BFN%B6%8AC-%E2%B4%84%60%04%05%8F%3DO%E9%FA%D7%99%EAw%17%A2%E5%96%F1eY%97%EF%093%91%F9%D3-Q%AEcg%3C%ED8%AC%5C%5D%EE%CE%C8%C9Z%D1Go%2F%8FmA%028%A6~z%9C%01U%25%F1%B1%BA%8Ee%F2J%C6%17%97%CE%EF%60%00%E2%B9_%B2%3B%7F%0DYK%09%7C%82%81O%CC%C3%FA%D48%C5%1AJU%24%AC%8E%9A-r%EEt%B6k%80%90%C1%2A%B3%85%03%27j%8E%09%27%D7%19%FA%0A%A9m%AE%5C%DC%E9%90%C5%A7%04K%CF%3C%87w%E7%E4%C1%23%8F%EBQKb%F7%AA%90%24%8B%1Cp%C6%A0%BB%B6%061%8E%B4%90X%C1k%04%C2%23%B9%FF%00%86Lu%3D%3F%203%F9%9Fj%84%E2%8EW%CE%9F3z%92i~"%D4.%F5%04%B7%92%F4%C8%0EIX%E2U%04%01%9C%02F%7FJ%AFg%AD%EB%177fK%7B%F5%8D%E5%27j%E0%13%12%03%DC%E3%F4%FCMZ%D3%FC%3BpH%9A%28%CCd%60%A4%8C%C0g%D7%82EkA%A36%9AX%DAZ%19%1AN%1E%5C%03%8Fp%06p%3F%CFjm%A5%D0%A9%B9%27%BD%CA%B7%D776r%24%F3%DC6%D8X7%94%FC%19%0E%D0%19%98%FA%92%DD%06p%05%60%5E%F8%8FW%B4%BF%9D-.%E7%B6%88%B9a%10%23%E5%CF%3F%D6%BAk%F8%AD%A6V7jC%08%94%10%C0%9EFz%7B%F4%ACY%AC%A3%97Ur%C5%5DF%DE%0F%BF8%A5%19-%DA%15%1Arn%EF%A9%9A%7CS%AF%3F%DE%D4%AE%0F%D4%D2%A7%895%C2r%2F%E6%3F%5C%1F%E9%5D%84%BAE%82%DB%99%3E%CD%11%5Cd%10%B88%AC%D5%B5%B0%F3%C2aa%DE%08R%C3%0AMi%19st%3B%27%0Ff%B5e%2BMOY%95%94%CDz%E2%26%FB%C7j%FC%BE%FD%2BZ%E5nb%96%25%9A%F4%B2H%B9V%C0%00%1Cg%15%08%82X%E71H%89%B8%11%C2%81%82%B9%1F%D34%8B%E5%EA%DA%5C%90Hqq%0C%85Wi%C1%18%E8G%B5h%A2%8EGQ%B3_N%92%5BH%EE%96%E1%D5%8C%DB%40%E7%24c%3F%E2iR%C2%09%27%F3%1AL%022Fz%FD%2B%12%17%FB%1C%EBkrAF%E5%259%E3%DB%DE%B4%FC%95%F3%00%12~%3E%E2%A3%60%BD%CB%9FgW%40%AApNI%C7%A6x%15%14%B0%CD%04hA%C8l%E0%8FjjBT%06%0C~%5EG%3D%B0O%F4%15j%19e%C3%09%C01%B0%18o%40j%94%81%3B%12i%F7%29%E4%B2%C8G%AA%93%D8%8EE%3E%1F%11%A0r%B1%5C%A89%E5U%C6%7F%2A%A15%AC%89%BC%C6F%D0F%2B%93%D7t%9D%925%CCY%DA%C7%3C%1C%E0%D2%E5%B9Ji%3DOU%D3%BCX%03%88%EE%FEe%FE%F8%EA%2B%A9%8AT%9A5%926%0C%8C2%08%EF_5X%EA%D7V7%0A%1AY%0C%60%E1%90%9C%E7%F3%AFb%F8g%AB%5Cj%9A%3D%C7%9C%8C%A9%14%80%21%3D%0EG%20%7F%9E%F5%AC9%93%B31%A9%CA%F5%89%D1%EA%BFy%3E%95%8D%21%CEkcU%3F%3A%FD%2B%1EN3T%C8%5B%15%FApj6%C6%E3%9F%C2%9E%7B%FDj6%C6O%3FJ%061%C7qQ0%04%E3%D3%BDJ%E7%1Cc9%E3%AFJ%87%24%9Ezt%A4%05k%E2"%B7g%CFNEc1%CF%CCz%9Ej%DE%A1.%E2a%1C%80y%AA%83%A7%3Di%A4%260%F00i%A7%93%EDN%24%13%CD%21o%D2%98%860%EC%29%98%C1%E7%AD%3C%9C%8Aa%05%8D%00%218%A6%F6%A7c%03%9AcP%03O4%AB%C7%14%DF%BBJ9%E9%40%0E%A2%97%14S%B8%1E%DDE%14V%60S%BE%D2l5%24%D9%7Bi%0C%EB%FF%00M%10%1CW%07%E2%9F%0Ai%DAB%C2%DAm%BF%90%B33y%801%20%91%8Cu%E9%DE%BD"%B9%CF%18%C7%BE%C2%06%FE%EC%BF%FB%29%A5-%99%A5%3F%89%1Et%96%2A%07AS%AD%A8%03%A5Z%08%17%A9%14%17%8Dz%B0%AE%293%D9%82V3%E7%B2.C%86%F9q%86__JX%20%E5%1B%00%A8l%90zU%B3%3C%010d_~j%13%7Fk%1A%E0H%3F%0A.%D8%AAS%8C%D6%A5%B7%BFf%7CHq%EC%3BS%8B%CB%1A%19%23rs%EF%C0%AA.R%EA4%9A%16%0C%3A%1Cv52%5C%B2%00%8F%F2%A2%D7DRh%F3Zi%97WQ%9C%A8Y%D1eQ%D08%C8%3F%9D0C%A6K9%2Fj%B1%B09g%89%CA%E0%FB%8EE2%29M%DC%80%81%85%5C%9F%5EG%BDY%BA%B5h"%5D%9C%B3rOqM%C0%5C%CDl6%EA%CB%CE%B5-avX%0E6H%BDG%B1%1F%E1Xz%ED%BB%7Fd%F9j%E4289%FC%3F%FA%E3%F2%AD%C8b%92%C6%D8%C9r%C7q%CE%03%1E%BF%E7%DE%A8%B4b%E27%0F%D1%C6pO%7FoJKF%12%93%96%E5k%92%F7%96q%1Br%A6hFS%0D%D5%40%03%1F%5CU%21%B6"%D7pm%12%A7%27%3D%0A%E7%B8%A6%D8%D8%DD%AC%2A%60%90%19m%D8%95%5C%FD%F1%9A%7C%90%CF%3C%87%7C%1E%5C%BC%06%03%A1%23%8F%D4U%5C%8B%16R%1F%B7k%13%C4%1C%90%91%AB%A8%1D3%DC~x%A5%D1%A7k%9B%DF%B3%3A%E4%06%2A%01%EA%A3%15oH%82%2B7%0E%EC%0C%CC1%8E%F8%1F%E4V%B2i%B0%B5%ECz%8A%9D%9B%09.1%C3zR%B8%19%96%90%5C%29u%0EN%1C%81%9E%C3%BF%F9%F6%AD%031%B6%2A%1F%01Xci%C0%15%CCj%3A%D5%DE%A6%F3%FF%00d%B2Ah%8E%B1%99%98%8D%D2%13%9F%BA%3D85.%87%A6%1DB%ED%EC%F5%1B%89%A5%7D%A1%E3p%E7%27%B1%06%9B%88%26k_j%96a%C4q%DC"%BEA%2AMV%88Cy%2A%5B%CC%CB%1A%C8xu%19%C7%E1T%F5%3F%0E%D9%5B8%8E%0C%E4%9EX%9C%9A%CD%8E%CE%E2%CE%F6%15%8D%DF%01%C1m%DD%C54%92%13l%F4%9D7%E1%AE%80%9Bg%B9%8EK%B7%3C%E2W%21%7F%21%8F%D75%D7%C1o%15%AA%A4V%F1%24Q%2A%E1U%00%01%7D%B1U%B4%99%03%D9%C7%CFj%BF%9C%D6%C9%E8b%CC%ADW%FDh%1F%EC%D6%3C%B9%1D%3B%D6%BE%A8%7F~%3F%DD%15%93%21%E6%93%29lV~%B9%15%11%FB%FDz%0Ay%3C%9C%02%3F%0A%8F%3F5%005%FA%1C%D5%7B%99%7C%98K%E7%9E%82%A7s%90A%1CV5%DC%E6iH%1FqN%05%242%B3%E4%92I%C9%3C%D3%0F%03%8E%B4%E6%C0%1E%E6%98Gz%A2F%11L%E7%3Di%E4%81L%07%D3%9A%40%1D%B9%A8%D9%F0%D8%14%F2E4%A8%3C%E2%98%C6%BD7%14%AF%C54%B6%05%02%1B%28%F9h%8F%20%0C%D0%E7v%29%C3%85%A0%07dQL%DD%EFE%00%7B%85%14QP0%AC%DDv%C2MKL%92%18X%09A%0C%99%E9%91ZT%86%80N%C7%8C%DDi%F7%E9r%F1N%CD%1B%21%C1%1E%94%8B%A3%EE%07%CC%95%8F%E3%5Dg%89%A3%0B%ACJ%7F%BC%14%FE%98%FE%95%929%AE9%E8%ECz%F4%3D%E8%A6%CC%D4%D1%A0%1DA4%AF%A4%DB%F4%11%D6%90%1C%8AR9%AC%EE%CE%9ETQ%B4%B7KBB%AE%11%BE%F0%FE%B5z%5BX%DD%40%3D%C6sM%D9%CDX%B7%93%CAR%AD%1F%981%C2%E7%07%F0%ADi%CE%CFS%9A%BD%2B%AEd6%C2%DE8%25%0C%5B%E5Q%D3%F1%CD%0F%3F%DAn%F7JJ%A0%1C.%3AT%D3%B8%92%D9%24%8E-%BB%86q%8E%95N%09%FC%8B%9C%B8%F9H%EAG%23%F3%AE%9Ed%D1%C0%E3%D4K%B6I%E5X%94%96%03%92%19%8E%7F%2F%F1%A8%CA%A3%3A%C5%B8%21c%8E%A0%D4%A0%97%BF%91%C2%B3q%C0%23%1Cz%8AY-%96yU%9B%1C%8E%80%1A%CF%A9%3D%0Csaw%A5%EA%F0%CEK%88I%E7%9C%86%CF%E1%5B%B7%B0%87%1Eb%21%1C%12%08%F5%C7%F9%FC%EA%BF%FC%24%90XL%9At%1B%AF%EE%9D%82%24%2AA%C7%B1f%E9F%99%E3X.%27K%7DB%CC%DA%2C%A7%11%BB%1C%A9%3E%99%AA%B3%DCWC%14%12%C0%1F%94%EE%E8z%F7%CF5%D0N%04%9E%19%B8%03%A9%89%81%DA9%1CV~%A5h%91%3A%BA%1C%C6%E7%23%9A%92%DA%E6Hm%A4R%A1%A2pA%07%B5M%EC%CAJ%E7%0Bd%A2%E2%DD-%92%CAY%3C%B6%C4l%B1%9E%DD%08%AE%BFF%D2%E6%D2%C3__%26%26t%DB%1CY%E7%EAi%BA%0D%F4%B62%3A%10%AD%93%8E%3A%1A%B1%A8%C9%3D%DB4%82e%DCz%0D%B4%D3M%89%AB%18%F7%12H%B7E%88%C9%27%1C%9E%17%E9J%D76%CD607%28%C0%23%1F%CA%A9%CE%B3I%23n%19%27%82A9%1E%C3%D2%A3efe%8E%28%94%05%EB%96%CF%EAi%D8G%7B%A2j%9B%A3%00%9E%95%D4%5B%5E%AC%83%92%2B%CCt%D9%9E%03%F3~D%E3%15%D5%E9%F7%A4%80w%0F%C0%D6%88%CC%D6%D5%1C%1B%91%82%3E%E8%FE%B5%95%21%F9%8FLz%E6%ADO%27%993%1E%B8QU_%18%A6%05W%F9%88%C6O%04%E6%98%0EI%07%14%F6%C6%FEx%E0%F3%F8T%2B%96l%1E%94%C0%AF%7D7%95%13%20%3F3%0Cq%DA%B2%1B%01%7D%FBU%AB%F9%3C%CB%83%83%C2%F1T%A4%60_jv%1C%9AhLin%C7%AD1%81%23%D2%A48%26%9Ar1%DE%90%88%DB%95%E6%98%BCS%C99%C68%A4"%98%0D%E2%90%B8%03%18%A4e%3D%A8%C7%14%00%C2wSB%D3%F6%F3%C5%03%AD%00D%C0%D0A%DBR%11%93M%91%B0%05%00A%B4%FAQO%DDE%21%9E%E5Fi%28%A9%01h%26%92%91%8D%038%CF%15%8D%BA%927%ACC%F9%9A%C3S%CDt%3E.%5CKl%FE%A1%87%E5%8F%F1%AEp%F1%CDrU%F8%8FS%0C%FD%C2N%BD%28%E9LV%CBb%9EEbv%21%CB%D7%9AP8%A6%8C%D3%85%17%29%96%23%BB%11Bc%91%0B%219%05G"%B3%DC%C7%24%C0%C4%C0%9C%E7%93%9D%B5h%02ER%BE%02%26%0C%8Aw%1Ct%ADa.%8C%E2%AFA%24%E5%12%EF%9D%12%97%92WU%21%7D%85c%FF%00hM%AAH%F6zk%1C%B7%0F2%0E%14VN%BFy%8Bw%08%C4%16%3Bs%9A%9B%C37%06%C6%D0%B4q%9C%C8F%E2%01%CF%E2Ml%95%95%CF%3D%BDlP%3A_%D8V%5Bk%E8%D9e%24%FE%F0%83%87%F7%07%D6%B6%AC%FC96%BA%88%F2D%C9k%12%E7%24cy%1D1%ED%5B%0B%E2%06%91%8A%F9k%B4%0F%BE%C3q%15"%EBw2%91%12H%A9%10%19%20u%FCi%B7%7DA%23%26%3B%8B%8B%29%BC%99%D9%9A%DDH%DA%0F%3BkF%E2%FE8%E2%C9%60%10%FA%D4%B66%D1jH%EC%1D~f%29%BB%D0%FD%2B%9B%D5%7C%2B%AE%DBJ%F2y%96%F3%20%E0%15l%12%3F%1E%95%9A%8F3%B9%A72H%D6%F0%E6%A5%15%E6%BE%2C%E2%8C%95%60Y%8BuQ%DA%BA%A9%B4%C8%3C%E6%99%A1Vp6%E3qU%C0%E4d%FF%00A%5C%07%85n%17G%7B%99.%14%7D%AD%DB%1C%E3%81%F5%F7%AE%8EO%10%2C%83%26Ec%F9%8F%CA%B5PH%CESlu%F5%BA%A2%BBA%1A%E4%FF%00%12%A1%C0%FAW9%2A%DC%99%187%9ET%0EG%CC%01%FC%02%8A%93Q%D4%E4%91%F6%A1%0E%5C%F78%3F%E1T%CD%DCp%28%DE%EA%AD%E8%C4%E4%FEG%FAV%8B%B1%99%24R%8BW%01%E3T%07%FB%DB%EB%A7%D2n%B7%E0%0Cq%E8k%8CK%A7%B8c%B1%CCg%FB%DDs%F8%AE%3F%ADnh%F3I%1C%81eQ%9Cg%3Bq%9F%D0%03C%11%DA%C4%FB%9D%F9%EC%3F%95%23%E7%BF5%1D%B3%E4%B69%CE%3A%7D%2AF%EA%7D%29%81RB7g%19%23%BDR%9E%EF%C8%20%8C%16%F4%F4%A7_%DD%08%86%13%05%FF%00AY%05%CC%92e%8EX%D5%24%21Y%83%EE%04%E5%895%00%3BY%97%B9%A7%91%97%27%BFj%A8%AE~%D4%CA%D8%DC%BD%FDs%40%89%D8%E0t%A4%19%00%E6%9C%CC%00%E6%9B%CF%3E%94%00%CC%E4d%D3OZq94%84%03%40%08O%14%CC%F6%A71%DB%C50%F1%C9%A0%05%E9G%03%9Acd%D3%B1%F2%D0%02%8Ej%19%14%B3%7BT%84%E0qB%E0%8A%00%87e%157%14Qa%DC%F6%A0h%A4%A5%AC%C6%14%C6%E9N4%D6%A0h%E6%FCY%1E%EB%28%9F%FB%B2c%F0%20%FF%00%80%AEH%FD%DC%D7u%E2%08%7C%DD"%E3%1DTn%FC%8Ek%86Pq%5C%F5V%B7%3Bp%D2%B2%B0%91%F5%EB%C5L%0Ez%F4%A8%90%00%0Fj%91pT%FA%D6%0C%EF%8B%1D%D4%8AU%A0%A8%C7zU%FB%F8%C7z%93D%C7%83%EFQM%18%910z%D4%C1pzqF%DF%C2%9A%07fq%DA%CE%9D.%7Fr%A5%89l%9FaV-%BC%D5%B5%DD%83%B3%A1%CFj%E9e%89Y%3Ag%DE%B1%2F%EC%A7%91%19%20f%C7u%E8%0Dn%A5ufy%D5h%D9%DE%26o%DAK%CA6%17%D8%BC%13%90%015%A3%A6ok%8D%AAW%E68%3BFv%8A%CD%87K%95X%99%A5%F2Q%06%5D%BB%01%F5%AB%10j%08%8F%F6%7B%15%7F%2F%213%D1%A5%3D%00%F6%C9%FEF%B5J%E7%23%D0%EE%ED%A4%8A%21%88%C6%C1%8E%99%CC%8D%EEOAY%3A%E6%A2p%CB%F7%808%DA%BD%CDf%3E%B2%21Y%12%2C%B2%C6J%96%5E7%91%8D%C7%E9%F3~%86%A8I%A9n%B8Q"%B1%00%0E%DCt%AA%5E%E9%2FR%C4%1Ad%404%D7%29%BAG99%1C%0A%96x%AD%E0%886%D5%DB%8E%A3%B5V%97VM%AC%AD%D1%AB%1A%EFRi%17ho%94v%A2%E2c.n%0F%9A%C4s%93Y%B7%D7%892%F9l%0F%1D%0E%EEEAup%19%8E%C2F%2Am6%D8%5C7%990%25W%9C%D5%AD%15%C8z%BB%1Azjy%10.%E6%DC%18%F4%00%F3Z%D6%D7%89%06%A2%19%5C%81%C0%23%FCk1%A6%82FTD%2A%17%A3G%D2%89%5C%C9%B79nF%1B%18"%82%8FK%D3%AE%12p%CC%BD%F1%CEsM%D4.%5D%7Fw%19%03%23%2C%7D%BD%05dxkQ%FBN%F5v%FD%E0%1F7%3C%D5%EB%E7%1E%7B%ED%E88%A6%84gN%DB%9B%2C%7B%F4%AA%E3%EFv%FA%E3%9A%96rOlv%AA%F1%80%069%AB%20y%FAqQ%00w%96%18%03%24%60%8A%95%BA%E3%DA%9A%AAYX%E7%E5%07%81Hbd%85%E4f%91%B3%C6OZq%3C%D4du%A0%04%23%1D%29%80%E5%8E%29%E7%A74%DE%05%00%18%07%AD1%F0H%F6%A59%EDMoj%06%0C%40%19%A3vG%14%98%C8%E6%93%DA%81%01%A4%1C%0CS%B1%C54%1Ei%80%EA%298%A2%98%8Fj%A2%B1%3F%B6%A5%FF%00%9Ei%FA%D2%FF%00m%CB%FF%00%3C%D7%F3%AC%AC%CB6%A9%ACk%1F%FBnO%F9%E4%BF%9D%21%D7%1B%FEx%8F%FB%EA%8B0%B9%A1%3Ck%2Cn%8D%F7%5C%15%3FC%5Es%B4%C5%23F%DFyIS%F5%15%D8%BE%B8q%FE%A3%FF%00%1E%FF%00%EBW%27%A8%B0mFYB%ED%12%1D%D8%CEz%F5%FDk%2A%8BK%9D%14%25i%10%83%F3%11R%C6j%20%DC%FDi%E8pk%95%9E%82d%E3%04b%9A%BF%7F4%29%A4%E3~G%A5I%AAv%27%0C%3D%A9I%F9j4%00%12y%C9%A5c%81%D6%98%EE%21%F9%85F%17%7B%E0w4%E0r%054%1D%AAq%D5%8F%E9M%09%91%5D%C0%B2F%23P6%83%9C%9E%E6%B2%03%DBZo%996f%23%E5%A3%F4%C1%23%93%F5%C7%F3%15%ABu%26%C8N%3A%9E%2B%91%D5%86g%8E%0C%F1%1F-%9F%EF7%24%FEX%1F%85tSw%3C%ECLTv%2FKu%08%8F%CB%8Fo%CA%98%E3%D4%A3%B1%FEc%F2%AA3N%8F%87%0D%F2%ED%CE%7FJ%82H%FC%E9%DCC%CB%19%1Cq%DBp"%A1%87O%94ee%7C%0A%D1%A4r%A66%5B%9CLs%D3%00%8CUw%89%9D0%01%C7j%BA%20%82%DC%29-%B9%8Ey5%5D%E6%96I%08%81%09%3D%01%14%81%95%EC%AC%7C%E9%FF%00x%E1W%BEkx%CC%9At%1B%15%15%97%B9%CET%D6%2C%96w%EC%E1%FC%97%03%B9%15%B3%A3%E8%B31Y%26%CE%CCr%8D%CD%5Bkv%24Cof%25%94%CDl%EF%127X%DCe%7F%0A%9AKy%20B%EA%AAT%F1%90%3F%95l%5D%CB%1D%B0X%E3%DA%AB%D3%91%90%3FB%2A%89%1Eq%DC%DBN8%DB%B7%00%FB%E7%8A%13%B8%ECC%A3%DD%CBiv%18%809%CET%F3%8F%E5%5Dim%CB%93%D4%8A%E2%E4%90F%CC6%91%C1%05I%23%3FJ%E84k%B1%3D%92%82%D9%2B%C7%3Dj%91%05%8B%8F%A7J%82%21%C7%AEOZ%92%E4%9C%12Nj8%CErG%E1Zt%24%91%C0%3D%F3%9Aj%9C%02%3D%E9A9%EB%9CRw%CFz%92%86%16%F9%C0%14g4%D7%CF%98%3B%D2%E3%1Fw%BD%20%10%F4%E6%99%C6%29%CCI4%87%91LCI%C5%00f%96%90%B6%28%01%A4%1C%D2%10%29s%9AB9%A0%04%3D%28QIN%DC%050%17%9A%297%0FJ%28%11%DDR%E6%934f%91B%E6%98%D4%A4%D3M%001%85fji%85I%00%E9%C7%F9%FF%00%3D%EBM%85U%BA%8F%CD%81%D3%D4q%F5%A9%92%BA%B1Pvw2A%C8%1E%D5%208%A8%17%23%83R%83%91%9A%E0h%F4%E2%FA%93%AD%00%0C%FDj55%21%3D%0D%23d%D1%28%E9I%D3%EBM%06%94%9C%F7%A0.%20%14%D6%EB%9Ap%C9%E0rO%18%A8%C9%C9%C7%BD%05%5C%86%E1K%B2%A8%E7%90%2B%9E%D4%2C%C4%D7%B2J%D8%40%FF%003%1E%A7%E8%2B%A4s%FB%C5%E7%F8%81%CF%E3YsG%B5%A3rT%2FBXV%B0g%1E%21%5D%5C%CA%9E%C6kf%9AKUb%AC%DB%B7%03%9E%E7%FCMU%9E%3DFU%2A%60%20%1E2%05uVd%CC%CAb_%93%DF%ADk%A5%BA%60%96N%9D%2Bg%23%8B%94%E1%AD%FC7%3C%89%1C%97%8CT%0EB%8E%B5%D0Yi6%D6%E8%A9%1A%0C%0E%A6%B5%C4%60%BF%CF%DB%A0%A4P%B0%AB%06%EE8%A8r%B9IX%84%C1%1A%C6%3EQ%F45%5E%E2%29%02%12%84%28%C7%A5h%16R%07%15Q%A0%8C%E4%16%3C%F4%1E%94%93%19%85%28c%C4%80%12z%F1%C3%0Aj%C6%B1%83%F3%14%20%FF%00%00%1D%3D%AA%FD%CC%1EP%DB%B8%10%C3%23%07%18%AAR%29TP%C78%E78%FEu%A4Hfm%E1U%3CG%B8%13%F7%89%19%1FZ%93B%BB%093%C6%E4%0F%A3U%7B%DB%95B%EC%EE%83%3C%8F%97%0C%3F%11%D6%B2%B4%ED%40%C7%A9nS%F2%C8pwg%9A%D9%236%CE%E2v%C9%C8%CE%0D%24%27"%AB%F9%DB%D1I%EF%C0%E6%A6%80%F1W%D0%9E%A5%8C%60g%1Di%87%A88%A7%9F%B9L%27%8A%82%86%9C%1E%00%A6%E3%19%E74%B8%C7"%93%24%B1%C1%E9%40%86%96%F9%A91%CD%12.%3AQ%82%051%818%E9L%C5%1D%0Eh%CEzP%21%A4%1Ai%EBRt%14%C3%D6%86%03h%C1%A5%02%82h%011E.h%A6%23%BB%E2%8A%A9%F6%A2y%27%60%CE2bs%FD%05F%2FL%B2yQ%3By%B8%24%06%80%81%FC%F3Q%CC%8D%2C%CB%D4%1Am%BC%B1%B2%94%9ETY%01%23%8E3%E9%8C%FBR%BC%F6%AA%B93%A8%FA%D3%BA%15%88%E4%60%A35%1Bt%A4%9EXJ%10%25R%0F%A1%CD%2A%92%FD%86%DF%F7%86%7F%2A.%82%CC%CD%B8%B6RK%03%82%0FLS%23%85%0F%0D%26%DE%7F%BBW%27%19%23%DE%93%CA%AE%3A%8A%D2%3B%E8k%12%0F%25%17%A3%93%F8R%84%CA%F5%AB"%1E%0D9%23%19%E7%9Fj%CC%E8J%C5A%1F%24g%15%3CPF%FF%00zM%BCzT%A20%5B%81N1%0Ct%C5%05Xh%B2%88HT%CF%9Cc%82%A4U%87%D3m%CA%04RK%13%C9%03%91U%F6%949%154rI%B8a%81%3E%F4%11%24%FB%95%27%D3%D2%DB%0C%CE%24%19%E0%0C%8A%CE%B9%B6X%C0%0E9%E4%E3%1D%2Bh%B4%92%1C%129%3E%95%93%AA%11%1B%9EI9%C6%05%5Cw2%A8%9F.%A4%16%12a%81%CEP%0E%A7%B7%E5ZOp"%8F%96%18%FEU%90%92%08%DF%EF%60%0E%00%15%05%E9iW%E5%7D%B1%F5%26%B5g%19%AA%B3%A4%A7%97%C9%EA%07aD%92%241%99%09%C8%03%3DqY%F6%10%85%3F%7B%8E%A7%279%AB7Q%2C%D1%94u%C8%EE%0DH%EEW%5Dp9%3ETe%F0pO%AF4%D9%B5c%1C%84%B4%07%1D%9B%D2%A3hb%8D~PUzq%DE%A0%C9Y0%F9%0B%D0z%1Ab%2C4%A6%EB%E7e%0A%87%B1%FEu%9F%7C%E6%12%C4%8E%7DCt%FCjI%EFDG%11%9E%9C%80%3A%1Fj%CA%9AW%B9%93%2CY%1B%1F%7B8%C8%FF%00%3FZ%D1y%92%CA%F3%BCd%B7%99%E6%00G%05q%C5b%82%21%BB8%2C%40%3D%C6%2BF%F2%C2F%8DJ%92%C83%F3v%1F%D2%B2%E5I%15%B7%1E%40%3Br%3BV%C8%C5%9D%95%BC%C3d%7BI%3D%C8%C8%AD%3B%7F%BA%18g%F2%E2%B9m6%F7-%14%24%93%F5%EA%2B%A9%B7%C9%5Eq%93%EBO%A0%16%3A%29%E9%8C%D3%0F%03%AE%7D%A9%EC%3EQQ%E0%9A%92%83%3E%B8%A6%E7%07%8A%5Cg%A1%A3%8C%91%DE%98%86%F3%9FQHN%17%A5%3B%EBLf%F4%A0%08%C9%C9%A5%A0%0Eix%A0%06%93%9A%6094%F23L%0B%B6%86%02%E2%A2%7C%86%A9I%E2%98%DC%D0%02f%8A%28%A0%0E%B4%2C%84%29PH%EB%C7%26%80%EC%B9Y%00C%ED%27%18%AB%A4%3Ep%CE7%7B%9A%1E%3D%DC%80%0Dp%9D73%D5%A7%E8%B8%F2%C0%ED%8F%E7Ry%12%3A0u%05%7DD%80%E7%F5%FF%009%A9%CC%0EI%C0%EB%F4%C6%3F%2Az%D9%9Ep9%C7rO%D2%80%2B%9BH6%12bW9%E0o%1F%D4%D5%11%2C%3Fmh%8D%B3%94%C0%19V%18%1E%A4%FA%D6%BAY%B26dM%E4%1E%EB%9F%E5%8A%82K%3D%D2%29%5D%C0%03%92%BB%06%0D%3B%8FB%9C%D6%F2%29%06%D1%93%03%AE%F1%DB%D2%A3c%A9%21%E2%2By%06q%C4%B88%FCEh%C9b%92%21%5C%01%92%3Bc%A1%CF%5C%FD%2A%D4Q%C1%1C%84I%E5m%C7%5CsJ%E5%29%B5%B1%8B%15%E6%A0%C1%8A%E9%C6%40%A4%82Rd%ECq%DC%8A%90%DC%EA%03%19%D1%EE%81%CFf%8C%FF%00%EC%D5%AA%96%D6%B6%C3e%BA%05C%CF%EE%E4%00%0F%C0%D43%D8%C2%EA%14%BC%85A%CF%CA%C5%7F%0F%97%1E%B4%B4-V%91%95%FD%A7s%1B%80%DAe%E8c%DB%609%FDjo%EDI%DF%8F%EC%BB%EF%FB%F2kB%C6%D6%DE%D4%9C3%B1%C7%3El%AC%DF%CF%A5J%EFl%A4%E0%ED%C8%EA%83%91F%80%ABH%CC%FBl%F8%0Eln%10%1E0%C1T%FED%D2%7D%AAR%09%5B9%CF%19%FB%C9%FF%00%C5U%E76r%9CHf%20%F6%04%F5%E3%DE%A4%17%B1F0%9B%FF%00%11%CF%F3%A3%40u%99%98of%C0%C5%8C%AB%91%90K%C7%FF%00%C5V%1E%A9w%23%12J%80I%E9%9C%9F%D2%BA%3B%CB%B3"%B0%08%80%7F%B6%B9%AE%3FP%B9%12j-%26%40H%FF%00%825%E2%B4%82%D4%CAu%1BV%1Bx%C5U%06p%CC%07%03%AEj%26k%89c%DA%A09%3C%28%CF%7F_%E9T%25%9E%E6G%92X%11%C8%1Cdu%02%A2%87P%96%C2%D9%C8S%BF%20%20%23%BF9%27%F1%3F%A5k%CAc%CCt%9AT%92"%01%2F%0F%EE%7D%EB%5D%87%18%27%8F%E7X%9A%7D%ECW%B6pH%B8%12%EC%08Tv%20V%BAL%24%8A7l%00%3Ef%FF%00%0A%96%ACRa%E4n%18%23%03%B5P%BB%B7%F2%90%85R%7D%3D%EBT8%60%08%FE.j%9D%CC%D1%C4%DEd%8C%08%03%A5%09%05%CA%10%E9%E1S%CC%98%28nN%0F%D2%B2%B5%0B%A8%95L%7Bw%2A%9F%BC%BDP%D5%BB%ADN%7B%8B%8D%96%A3%2A%06wu%19%18%23%F9%9A%C5%FE%CA%BAiI%24%83%D3n%3B%0E%95%A4R%5B%90%DD%CA2%EA2%24%8E%A8%C5%15%BF%B8H%CDA%24%E2h%8A%B1%24%F6%24V%8D%C6%81.%DF%90%80%0F8%3C%E2%AA%A6%9Emd%F9%CA%CA1%9C%29%CDi%A7C%3DF%E9%ACV%F6%11%9F%BC%D89%AE%EA%D7%EE%F6%C8%AE%12%D0%8F%ED%18%80P%06%F1%F5%AE%EE%D0f1%D2%98"%C9%C1%5E%3F%FDU%11%E0%D4%A4%F1%8CT%3D%09%CFz%92%83%DE%90%E39%A5%E7%14%13%C6%29%88i%3Di%BD%05.3%ED%8AB2pOJ%60G%93%BB%14%E6%A4%27%14%1A%40%204%D3%CD%3A%98N%28%00%3CR%80%0A%D0%3EaHN%07%06%80%17h%A2%A3%DDE%00w%D9R%D9u%2C%07%F1%01%D6%82%91%EE%07i%E7%B6%EA%1C%81%91%B7%3E%99%E7%F1%E6%91%5C%E3"0%CA%0F%1F-p%1D%24%89%14A%8E%C5%938%EB%9E%058F%83%827%91%EF%8AB%C3%85%2A%03%13%DC%0Ak%3B%AEA%199%C8%3D%87%B5%0C%07%98%C1%2AU%B0s%8D%A4%F1C%A2%B2%9D%C4%E0%F6%1C%FE%BD%AA%134%84%00%AB%8F%F8%09%A9%0C%AEN%0A%B6%0A%82%5C%9E3%DC%7FZV%02%26%81%17%E6%1BA%23%A6%09%A7%A5%BB%10%08dE%3F%DE%1C%8A70%18%F9%98%1E%C0%80%05%3DgU%E0%A1%3Cc%23%24%D0%04%8Bb%C1G%EF%A2%FF%00yr3%FA%D4%7Fce%3F%EB%94%E3%9C%8C%9CS%5E%E4%E5%8A%AE%3D%3B%D5s3%F2%19%98%9E%99%EC%3F%0Ab%24%F2%80%E5%9E7%E3%80%01%A6%F9jX%01%1A%1D%C3%20%80%DC%FE%B8%A8%CE%DC%E7s%E5p%40%07%03%F2%EFR%3D%CA%1E788%E8Nh%D0%04x%19%97%E5%85F%3DI%E6%A26%CE%CEyc%F4%E7%27%FA%D4%C1%A3%C7%CC%BC%9E%83%3C~%B4%EF4%A3%AB%10%1B%DC%12%7F%98%A0FU%ECEF%5Bw%D3%9E%2B%94%B7%88O%7B8%C9%2B%BB%A8%E8%7F%C6%BAmV%EEY7%06%27v%3A%9E%9E%DC%E7%A5q%C2V%8E%E9%F0%18%B98%C2%E4%91%5BSD%B3%A2%B76%E5%84H%B9%27%23%1E%83%FC%FF%00ZY-mg%04y%19%5C%FD%E2%2B%0FNi-o%0A%B2l%F3%3A%B6%3D%7D%2A%5B%BF%11%14%91%D66Q%1A%B8E%C7%7FS%F9%7F%3A%BB7%B0%AE2%F7I6r%0B%CB%10C%29%0Cc%EC%DC%1E%9F%9DhX%C8%1FL%B7%5C%F2%D9%CF%3E%E6%B1l%BCJ.%19c%BA%0B%E5%9C%7C%DD0j%D9sg%2F%96%0ERB67o%FF%00%5D%3B%3Bj%2B%F66%95%8AC%28%FE%EF%E8%2B.%FE6%BA%09%18b%AA%C7%2Cs%DA%B5r%0F%98%BD%98Vid%81%E4%BE%B9%3Ba%85v%A2%8F%E2ojI%0D%B2%40%A2%C9%11c%8B%E5%5C%03%C7%B7O%E5P%0DM%1D%D8%14%21%B6%E7%1F%8E%2B%26%7DrY%24%00%BF%04%E4%8F%7C%F4%FD%3FZ%A94%FEk%E48%0C%40e%3F%5E%A3%F3%ABQ%B0%9B%ECi%5E_%04A%21%2A%C8%C3%8F%9B%B7%D2%B3%27%9F%ED%28%CF%16%D5%23%B9%EF%FD%2A%91%82y%83%28by%E4%0F%E7U%E7%B4%92%DE%20d%90.z.y%ABH%CD%B1%D6n%7F%B4%A3%CB%13%F3W%7Bh%7Fu%EB%5E%7Ba%CD%FC_%EFW%A0%DA0%F2%C0%ED%DF4%D8"%D1%234%C3%9C%11%8A%7B%11%83%8E%B4%C3%9F%ADICy"%90%F1N%CF%19%A6c%D4%D3%10s%F9%D3%08%3E%B4%E2%DCSy%234%C0%09%1E%94%DFzR8%C5%20%18%EB%CD%20%10%D3z%9EiI%E6%83%C8%A0%06%E4S%5B%AD.0i%0D%00%25%14Q%40%1D%EB2%E0%EE%91N%7B%03Ag%DCB%98%DD%40%F5%19%A8%14H%B2d%17A%F8%0F%E5R%18%E3f%240%27%B9%C6O%E3%5C%07Aa%5D%18%1D%A5N%07V%A4vwd%0B"%94%C8%C8%DB%D7%F1%A8%B6%FC%BBJ%B1%07%9F%A7%F8%D3%99%5C%81%97ys%C7%04~%B8%A0%05%F3%15F%07l%F21%FF%00%D7%A74%98%2B%F2%ED9%E3p%1C%D4%2A%BC%91%BBk%01%C0%C61P%2B%F2F%FF%00%99z%82%3F%5E%9C%D0%05%D5%95Z6%1B%B9%1D%D7%90%3E%A2%99%81%B4%95F%E3%AE%3A%0A%AEN%0E%5C%7B%E3q%14%A5%A3%27%E6%1B%9C%2F%1D%0EG%D6%80%24%0E%A5%01%91%40%00%F5%03%DF%1F%FDzUh%F1%F7wq%93%B7%D3%D4%D4A%BF%BA%B8%3E%80%E6%9B%BC%23%92%CA%A4%F6%C8%EB%40%12%EF%3CeB%ED%E3%03%1C%D3%5E5V%0C%8C%3E~%A0%1C%E3%D8f%98%AC%C1%C1%0E%06%E1%D4%8C%F3%D7%B0%F7%F7%A6%BE%ED%BB%B1%F3q%82%C4%E2%80%25%25w%AF%2CG%A7sN2%F91%EDgm%C7%903%90%3D%AA%B9%25%80%2C%40n%A4c%81LY%B2r%02%9C%0C%0CP"%B6%AF%2A%CB%10%93%03%E6%19%DC%A4%9C%FA%60%D7%1C%E1c%BBy%23%5C%03%DB%3DO%E5%5D%86%A1%19x%F1%B4%60%0C%F0z%9F_%A5r%D7QI%25%C22%03%F2%9C%F3%C0%FC%ABjl%966%E2%F8%DC%13%12%5B%B2%95%18f%038%AA%D6%5E%1B%9FQ%98%F9%BB%A1%89y%1Cry%AE%92%CCB-%8C%B3%81%95%EA%17%A9%F4%15u%27%5Bx%3C%C9B%C6%83%9C%0EsT%E4%D6%C0%92g7%7B%E0%98%D6%DF6%CEw%A8%E8OZ%C4%B7%99%D0%7D%8E%F1YH%E3%E6%EA%B8%AFI%8Aq"%12x%CF%ADc%EB%BA%3D%B5%DA%89%1Cl%94r%92%2F%F5%A7%09_F%12%8D%8A%11%DE%19%02n%23%23%EFb%9At%F9%B5%E9Dj%C5m%A3%3C%B0%EEk%3A%C4f%F4%DB%CC%D8%20%ED8%EF%5D%FD%BF%95kb%824%DA%A1p%056%EC%24%AEp%DA%87%83%7C%94%CC26%17%F5%AC%0B%8B%09m%C8Y%0E%00%3C%13%5D%F4%DA%9CR%CAWr%96%E9%B4%9F%D2%A8%DC%C3%15%C1a%2Ck%BB%3D%87z%23%27%D4%1CQ%C3%2C%92%C1.%23bA%E3%8E%D5Z%EEw%95%B0%F8%C8%EB%C7%26%BA%AB%9Bk%7BD%92H%C7%CC%AB%C0%E3%FC%2B%8F%98%96%95%89%18%24%F4%C5l%8C%9E%84%FAh%CD%FC_Z%F4%1B%60V%20%09%E6%B8%0D%2C%03z%9E%A3%A5w%F6%BFq%7D%08%A2%40%8B_%C3%91%FA%D3%3A%9A~~SPN%A5%E3%DA%09%19%EE%2AJ%1D%C6%00%A6%9C%1A%5Cq%8CSH%C9%1E%D4%C4%18%E3%14%9DM%1C%D1%9E%28%01%A4sI%9C%D2%E7%8Aa%EB%9A%00d%84%A0%CD%08%DB%974%E7M%E2%85%5D%AB%8A%00o%BD%07%9A1%CD%02%80%13m%14%FF%00%C2%8A%02%E7j%C5%81%05%98d%E3%19%3DG%E9%8AO3%96%CB%90%09%E8%0F%1F%5E%B5%5C%991%B7%E5%8C%93%C8%DC1%8F%AD"%BC%C2Lm%DC3%80%01%ED%5C%07Ae%5C%86%E1%89%E8%00%1D%E9e%00%A8Q%82%3B%11%9C%D5%7F%3D%F7l-%8C%1C%81%9CS%C4%AE%FCrs%F8%FF%00%9E%D4%00%AF%B2%12%23f%DB%2B%0E%17%19%24%7BP%ECJ%B0-%B0%1E%81%7Di%17vv%86%DB%93%D4%F4%A64gz%80%C8q%C9%27%3C%8Fl%0A%04%3D%967%40v%B3%60u%E9%40%93%FD%AE%A3%80y%CF%E3%8Fj%8D%9Fq%EB%B7%D0c9%A5p%1C%93%B0%F2%3E%F374%C6%3D%A5%8D%97%F7%9Cw%E0~%94%C3%82%98l%8E%E0%85%20b%924%F2%D3%7B%C4%09%03%03%2B%9A%8F%E6%DD%86U%03%D1x%1F%95%02%1E%25a%27FL%1C%0F%9C%E0%8F%5C%0F%AD9%E4"L%C8%14%B7%F7X%91%FDi%A7i%8D%F7%2A26F%1B%07%F0%C50%20M%A1%18%ED%03%EEs%80%3D%81%E9%40%03%C8%F29%C1%DA%3B%28%1D%0F%AEi%CC%C3%23%0B%80z%94%19%FCi%B9%DA%0F%03%FC%3D%A8E%2C%D9%04%00%7B%E4%01F%E2"%8E%28%E3%8D%B2%CC%A0%9C%E1%89b%7F%CF5%8Fs%09%86f%88%92%23v%CE%07%1Cu%AD%99%D83%ED%C0%60%07%18n%BF%95W%BD%B6-%10%3C%15%E8%08%E7%9FL%D5E%D9%83%2A%C7%0C%09l%03%90%40%F9%C9%3D%AA%86%FF%00%ED%1B%EF%B4H%08%B4%84%7C%AB%D0%1Fz%BF%1E%9E%D3%A3E%28m%84%E0%E7%BF%14%B7%16%F0%84%0A%E3%F7%5C%E13%C3%7Dk%40D%D6%B3I%3E%24%C0X%F3%80%07%7F%F3%FDjK%C2Z"%C3%9C%0EW%3DEB.F%01%C63%DB%18%C0%A9%01W%81%CB%1C%1D%A7%F05%2BFS%D8%E5%F4%F8%0C%FE%23%C2%B7%CB%D4%9Cr%05vW%E0%98%B0%A7%05G%CA%3B%1A%E7%BC%3B%08m%5E%E1%F8%00%0E%D8%EB%5B7wc%0C%06%06%3DM%5C%B5d%C7c%92%BFY%25q%E6.%CB%81%FC%40%F1L%87X0%8D%97%AB%92q%CFn%9D%7F%3Ek%5EwK%A8%FEp%BB%B28%23%F1%CF%F9%F5%AA3%DA%C5%29-"%29%18%1F0%EB%F9v%AAD%B3%27T%D4%CB%C6%FB%03%2B%1F%94%91%CDsLrk%5BZ%8A5u%11%C9%9D%A3%95%ED%F8sY8%27%9CV%D1%D8%C9%97%B4%81%9B%D1%EC%2B%BC%B5%C1%88%0C%F6%AE%23DO%DF%97%F4%AE%DA%D4~%E8q%F8R%7B%82-%F4%1E%D5%19%FB%BE%F4%EC%FC%A7%EBM%EBH%A13%E9Mc%C7Jq%A6%F6%CD1%0D%3C%F3GjC%9F%C2%94%1E%F4%00%D3%8An3Jz%D1L%06%E7%07%1461C%0E%F4%CC%D0%03%BA%D0%074%80%E2%864%00%FA%2A%2C%9A%28%11%D8%06%11%E4%E4%29%E3%969%FET1%DA%09%3BJ%9E%E6%A3%C0%07%21%C0%C7o%F0%A6n%94%02K%60d%9F%97%FC%F3%5C%07A%20%25G%3F0%27%3BG%14%E0%D9%F6%EF%93%D4%D3%14l%EB%97%CF%E1I%92r6%9Ez%8E%D4%01%23H%BB%B1%CA%E0p3%DE%93%EC%DB%DF%1B%1D%CFq%B4%9C%FE%15%1B%ED%8B%3Esc%8E%BC%D3%E1%99%C6D26%0F%24%A94%01%23%AC%C8%D80%95%00de%08%02%AB%89%27g%3Eb%2F%96%A7%E4%23%8C%FF%00%93S%09A%20%BC%A5%87%A3%92%D5%1C%60%81%90%11T%FE%14h%02o%5C%9C%2Br%3A%D2%A8%DC%A5%BC%CF%9B%D0%F7%A4DB%18%13%D3%FD%B0%3F%A5G%98%91y9%3Cc%D2%80%1C%BB%8F%CE%ACF9%00f%80%C1%9F%9C%81%C6%5B%AF%E9Q%9C%96%CE%E4%0B%9F%BB%D7%3F%FE%AAp%94%A8%03%3Fx%F5%19%3C%D0%21%B3%0D%AD%C3%9C%E7%D0~%BDi%E1%BER%C1%B0%14%1C%86%C1%EE%3AS%04%B1%BF%2C%CF%86%E8%3B%D3Yb%2C%DBC1%3F%DE%18%ED%D7%8A%00Frr%EF%82%7DU%80%FD%0Fz%8DY%7C%CF1%81%5Cz%F3%F8%D3%8A%B2%C6%A06%EENp1%F8f%98%CC%92%C2QQ%15%89%EB%EA%29%A6%04%91%CF%90%089%00%D6%26%A75%EC%CEQ%10%A4c%03%0B%D4%FDI%E3%F0%ADuH%C1u%5C%EC%8B%E5%00w%3Dk%2AH%8B%96%91_j%13%90%A3%D3%D6%B5%B8X%A1o%3C%B1%BE%D6R%7D1%9E%3F%1A%D7%5B%C1%B7%9C%9C%8Cc%15%99%0Co%25%DBF%DD%14%03%9F_%F3%8A%B1%81%01%3C%82%07%5CRcE%ED%16%D5m%0D%D4%C1%B3%E6%9F%97%D9%7B%FE%B9%FC%AA%8E%A8%EF%E7%07%8E_%9B%3D%3A%F1V%7C%E9%24%B7%8Dc%5C%92%BC%82%3BVm%C1%D9p%23%95CH%E3%20v%E3%FF%00%D7O%A8%8A%A2%E6U%92Dh%D6%60%0FX%9B%0C%00%F6%FC%2A%C0u%9A%26%7D%D2g%FB%AC9%1F%E3S%A4%07if%B7%88%2F%AB%03%F9%D5%A7%88%0B%7F%98FS%BE%3A%0A%B5%24M%8E%03S%9C%BD%D3.x%1E%FCT%11%ECD%25%BA%91Z%DA%E6%94%21%BC%06%10%02%B8%C8%19%CEi%FA~%8C2%1EH%CB%91%C9%04v%AD%1C%92FVw%25%D2-%8A%5B%2C%8C%BBG_%C2%BAkb6%0FOz%AB%0C2%95%C0%85S%07%A1nj%D4Y%00%96%3C%0E%957%B9I%13%8C%93%8ALqJ%08%EA%074%13%DA%9A%01%84%D3sJW%A74%98%E7%8A%A1%08Nx%A4%CFjv%7B%E2%93%1B%A8%01%8DI%9Aq%C54%AF%14%C0d%8Cp1H%0EE8%91M%07%A8%A4%01%8ABsJj0%0E%EA%60-%14%ECQHGX%0B%1C%15%5C%8E%E4%0E%F4%D6%94%01%9C%92%07%E9Fv%A9%03%AE3%8C%F3Q%02%E3%9D%CB%BC%8E%09%03%8A%E1%3A%09%3C%D8%A4%93%96s%80%0F%5Cs%F8P%40%CFBI%3Cv%A6%EC%02%3C%96%0C%E3%D3%BD4%A9dUc%B8%9E%C3%8F%D6%98%13%10%C1%09ls%D8zS%3C%C3%D1%7D23L%C8R0%9F%7B%8E%A0%D25%DC%2A%C1%07%27%FB%A9%C9%CF%D2%90%12%E4%18%F09%F6%C7%A5%21b%02%8D%AB%83%CEFF%29%B1%92%E0%121%C9%F6%E2%9A%92%0C%12%AB%D0%F7%14%00%3B%3F%9B%84Da%8F%98%92r%7F%0Ar%EE%0B%99%14o%ED%B4%F1%FC%A9%E9%29B%18L%CA%7B%60%F4%A6%B3%AF%24%AA%92H%E7%9C%D3%01%1AB%A7%27%E6Q%D4z~%7D%2A0%AC%EC%0Am%3C%FD%07%BFZQ%82%098%E7%D0%F5%A6%85%89W%24%12%E0ps%D3%F3%FCh%10yh%DF%26%14%BFL%13%9C%E2%94%29%07%0D%859%E7%8AB%5D%B6%9D%AA%1B%18%C8%CF%3F%AD%29v%23%04%B0%03%A8%23%3F%95%20%21%95%DCe%5B%85%1F0%21%B2~%95%1AJT%FC%A1%8F%7D%A3%A9%FC%2AY%5C%B1%1F%3Ep%3BS%10d%EF%DA%17%23%1E%86%84%C4E%1D%F4q%CB%21pT%92X%AB%0Cq%EBU%1Ax%9E%2B9U%C2%C4N%C7%F6%C8%E3%F5%FEu%A4%E8%AC%02%F9h%AB%B7%90I9%AC%C9%B4%F8%A6%89%F3%09X%D9%F0%C46%17%F4%ADT%97P%29%5CN%B6%B7%19%99%B1%11%3B%1Bi%C1%1E%F5SR%D4%20%89%0F%94%FB%E4%E0dt%3E%F5%AFk%A1%D8%CA%A4K%12%B0%8D%8F%DFv%25%BBc%D3%15%60i%B6%91%B0%09%04%28%00%DC%19c%19%FD%29%F3%C4Z%94%ECn%D6XP%87%18%C0%0A%B9%C1c%D8U%03t%B3j%A4%2B%09%3C%85%F2%CB%2FB%C7%EF%11%EDWd%D2m%DF%26%20%D0%C8%7B%A6%7F%FD%5E%D5F%2F%0F%3D%B9-kt%C9%CF%3B%D78%A1J%20%DB4%F2%00%95%9D%80%8D"%04%E7%FB%C7%3F%D0~%B5%04%12%2F%D8%219%E5%90%121%9CU%294%BDG%C8%95%3C%F8%A4%0E%D9%25%B2%0FLz%7BS%ADt%8B%A8%A1X%A4%BCP%07M%AB%92%3E%9C%D5.%5E%E1rS%24WW%10g%05%95z%83%D2%B4%3E%CD%B1%81%009%27%A08%3F%9E%056%CFK%8E%D2%26%F2%CB%B3%93%97g%C6%E6%AB%25%0BF%D8%402%3EQ%8E%9FZ%CEOP%B1H%D9%5C%B4%D9%12%B2%16%C6r%B9Q%EA%078%27%FC%FDf%96%3F%B3%BE2O%03%92j%F3%A3%96R%1Bh%3Cm%03%93%EF%9E%D4%CB%9Cm%0Cr%0EFy%CF%15%B9%25pI%1Cp%3BQ%F8P%AC6%9E%E3%3C%1AP~S%9AhCOJf9%CD9%BE%F54%9C%9E%95%40%1B%BD%28%0D%C5%14%DE%83%8Ab%03%83M%26%80Nh%3CP%04g"%94c%14%A7%04SG%14%80%5CR%1AwQI%8E%29%88J%28%E3%D6%8A%06t%BCm%1B%BD%29%AB%28%0CF%D0s%DC%8A%84%C8_%90%5B%14%FC%EE%01W%A9%E7%04%D7%02F%C3%8B%A3%E4n%FD%7F%A5%23%BA%E7%1C%90%2A2%9BNz%8E%FD%F1J%FBr%0A%B6Cs%CFz%60%28a%D4%8D%AB%F4%A7%190%DF%2F"%9B%90%AA1%C0%EE%29%3EB%0F%04%1E%94%80%7BH%15F6%F1%D4%0AH%E6%07%E4%E5T%E4%E0%81%D7%BDE%F7%9B%E6%CE%07%A59%160%B8%DB%F3v%CEi%DC%05yB%2F%CC%C1A%FE%F6%05%2A%0D%C8%1B%00%068%CE%E1%FD%28%F2%CF%94Y%88%1FPy%FASR%20%A0%2F%00%1E%DE%94%00%07G%E9%84_%BB%96%C0-%C7%F8%D4%DEZ%A2%90%B2FB%0F%E2%E3%9F%5Ej%06%01%19%CA%BE%08%CFU%C84%7C%E9%08%3E%5E%E6%CF%DE%C9%5C%D1%A0%8BA%E2T%3B%AE%1Fq%1C%AA%8E%3F%3A%81%5C%B3%1D%D9%2A%0F%07%1F%D2%A1%96%DC%CF6%F0%DB%02%AF%DD%2F%FDq%D6%93"%1Ce%C8c%EF%901%DF%3E%B4n1A%19%FB%C4%12%7B%8E%9F%D6%A7%11%BC%3F0%95%23%3D%B9%00%8AH%9AB%0EPmS%FE%B0%F5%23%EBQ%CC%8B%24%85%13c%12z%B7%40%3D%E8%01%D1%91%24%F8f%DC1%82%EAr%3Au%F7%AA%F3%3CH%CA%9B%83%1Cdc%19%3D%86h%8E%D5%00%DB%E6ac%04%80%A0%E0%7D%00%A4i%B2%81d%8CI%8F%97%19%E4%0A4%02O%B6A%0C%2C%A0%FC%CC~Pq%C5H%93E2%01%1BL%8F%9D%A3%03%0A%DCd%E4%E3%8AHR%27%0E%FF%00f%85H%03%9C%90%C0%FEt%2A%ECI%13%06%25U%EA%88%3En%BDhv%02%07w%F30%CD%B9%FE%BD%29%F2%F9H%A3m%D0wC%92%02%12%09%FA%E7%9F%CA%AAH%19%8E%FF%00%99%CE0%06rON%2A%24%95%DC%15%D9%B1%B2ys%FD%29%AB%12NA%28%02%7B%0C%FAS%17%7C%60%ED%7D%CC9%E4g%1F%E74%D2%D2%8F%BCU%94%F0v%F3%8A0Kd%B7%04%0D%C0%03%F8%E2%98%12%23%10%AED%8Cs%D3%92y%A7Z%CB%B4%BA%85%1B%88%C6%5B%9F%C7%EBY%B3%0B%BF%3CGl%04h%40%DD%23%0EGZ%B7%E4H%CC%04%9B%DB%FD%D6%C0%C7%E5%F5%A6%B4%19j%DAQ%BD%91%E6P%0F%40%D8%E9PN%EA%A0%F9%27ql%F6%27%F4%A7G%E5%12%A4A%9D%87%83%9A%B6%91%C6%A3y%23%91%C9%03%035%B4%5D%D5%88fz%A9R%10%F6%1C%F1%DE%A4%CF%14%D2%D8%97%04%9E%3A%83%F8%D2%03%C7%3C%E3%A9%A6%00%DC%9AN%DC%F6%A5%C8%C0%A4%CF%A5P%80sMaN%06%91%B95B%1B%EDM%3CS%8Bb%9Ay4%00%DE%94%87%9Aq%E2%98H%14%00f%97%3CQ%90i%A6%81%06%3D%A8%A3%8A%28%03e%19%8E%E5%21%88%1D%85XH%C7%04%12%A4%2F%03%03%15%0F%9F%FB%CC%278%E4%93%C6%2Aa%2C%5B0X%F9%B9%E1F%085%C5%A9%B9%1B%05%19%19%C2%E7%EE%92%07%F2%A4%7D%ED%FE%AF%234%D7%DD3m%EF%9F%5Cf%A6%F2%B6.%02%E1%B8%24%E7%3F%AD%00S3%98%F1%1B%C8Kn%C0%F9s%9Fj%B9%16%D0%98%0E%AD%B4%E75%13%8F3%82%A3%83%D4%0F%CA%8D%B2g%96%E0%FE%14%80%9F%25%F9%DA%BCz%82A%A8%144l%5D%E2%E9%FCG8%23%EB%40m%8Cp%BB%F1%C1%5E%F9%FA%D4%8Ds%1B%C0%15%D7iA%D8%D0%03%0C%CD2%9D%C1%80Q%D3%93NIq%00%C7%0D%9E%08%ED%F5%A2%DD%D6%7D%AC%A3%2B%8Ey%C5%12%28%0E0%CA%17%3D%17%A9%14%5D%80%C9P%CF%F7%F76%E1%82T%D2%B1%C2%01%95%C0%18%0A%3A%F1O%20%00YB%A18%F9%0BrG%D6%9A%26%8C%EE%13%95%8F%03%92F%7F%95%20%08%C0%92%13%82%15%BD%FA%D49%DA%0B0%1B%0FB%DF%CE%AC%07h%E2-%1F%CA%09%C7%04%8D%DE%D5%00%7D%C5%8B%C7%B3%1F%7BoO%A5%1E%60hI%E4%C5%12%FE%F6%27v%19%C2%0A%CFX%B6%B2%89%23S%BF%A7%3D~%82%A7%83d%F9%28%B8%2A%09%E5%BA%8F%EBI"%BC%C5N%F4%21%06An%83%FF%00%AF%40%11%C8%10FV%3D%C3%83%90T%8C%FAf%AB%DB%C5%BAY%00%60%0E~%E8%EA%7D%3F%1AY%18%AA%FC%CD%CB7%25rI%FA%D4%96%E0%A4%E1%D3%2Az%16%23%A0%A2%E0L%D0%25%B7%CE%EC3%DCw5V%5B%94%11%E5%B9%19%CF%CD%D3%3E%82%A7%B82%95%FD%E9%F9G%07%DE%A9%CD%1E%D6Q%C6%D3%C8%CA%F4%14%82%E2%96%91J%9E%80%0E%E7%A5%2AF%1F%1B%A5%EB%C6%00%3F%ADVibvUYYH%EB%E8%7D%AA%40%C6%20%C4nnx%3E%82%9D%ECH%A6%13%96%C3%60%E4%F4%3CT%AB%95rX%0C%0E%C4g5%5E6%0D.%C0%DB%CC%7Fx%91%8A%98%81%20%01d%23%BEqClhj%23%C7%2C%8D%2A%E47%23%18%00%0Ar%C9%CE%D6B%B9%A9%18%12%E0e%5B%03%3C%D4BT%24%12%03%01%9Cz%8Az%85%C7%AB%B4%2B%85L%06%E4%E4%F45%03%3C%D9%0CX%05%20%82%A7%A1%F75i%9C%94%05%06%00%18%F9%B8%A8%9E2U%F7g%00%F65%A2%B9%2C%AA%A1C%91%96-%9C%9C%9E%B9%153%0C%05%EDP%02Y%F70%2A%3Bdc%3F%E7%8A%9D%B9%C1%FC%ABH%83%13%1E%9Di%B9%E4%D0%0F%27%D7%BD%29%15%A2%24%5E%FCR5%19%C1%C5%0C3%D2%9A%10%C6%03%B54g4%AC1E1%067T%24%10jNE7%1E%B4%86%00%60Py%A3%9ACLA%8A%293E%00m%B8%DC%07%1F%29%FE%10%05%2A%92%A3%0A%14%2FN%7BS%96Y%09%EA%07%B5%2ArH%D9%B8%D7%01%B8%A9%BB%82%BD%BA%10%29%D8%0A7%15%CE%7Bg%AD%1B%DB%18%CB%7D3P%FE%F3%21%A3%04%ED%3C%06%3CP%04%A0c%92%BBI%ED%9A%02%86%7C%FC%AB%C6y%EFL2J%17s%1F%9B%D0%01A%92T%DA%5DK%03%EA%D4%24%02w%24%9E%FF%00JFU%D8%C2U%047j%8Ai%25u%21%1B%0D%EC%3A%FD%29%83%7B%00%0A%BE%40%E4%9294XD%AA%A5%82%A4I%C0%ED%8A%93%E5%C6q%CFbE1I%0C%A5%09v%3D%88%E9S%849%C4%80%29%F4%C74%0C%AE%F1%86%E0%A0%3B%BA%9A~%0Cj6%90%A3%1C%02%29%ED%19%8F%E6rX%1E%DE%95%14%85%F06%B0%3Cv%ED%40%85%90%BBc%7F%96W%3C%90%C4%92%28HQ%8E%11%89%04r%1B%8A%809%C0%5C%1C%8Fj%B0%D3%3A%C7%B60%D8%1F%7B%03%03%FF%00%AFE%C0f%C4%E0%90%CAT%11%90%C7%06%A7%DD%1A%C4%0B%26%E5%EB%D2%A3%B6%89%B7%07%92E%0B%C9%F9%8Fj%8C%C0%A40%8EUf%1C%95%3CP2%00%DB%E5f%27%03%D2%AC%2A1%C9%E4%95%20%E0%8F%E7UF%E3%D5x%1E%DDjXe%97%C9p%A1%F0I%EBJ%CCD%D3%E4%C4%5D%E6%0C%008%C8%E9U%9A%16%7Bew%21%D0%F0%C0%F3Vf%95%A4M%A1%8369%C0%AA%0668%0C%0B%00z%13%91%F9Q%A01%D1%AA%26J%C6%01%0D%8Ex%03%DE%A4p%06%F0%8D%BC%A9%ED%D2%93j%E0%12%F9%F4R%B4%B2%26%D5%0EA%DAz%0FZ%3A%88d%2AA%25%B1%B8%F3%8A%964%0C%5B%24%29n%A4%D4%206%DC%9D%C3%27%9Fj%928%FC%C6%CA%829%EAh%18%99%CC%A3k%8Cc%BA%F5%14%A2%25-%8C%01%81%8F%97%8A%91bTV%04%B1%03%DE%A11%BBd%A3%11%ED%8Aq%97A%13G%0ES%7B%1F%94q%92z%9A%8Am%DBX%E4%008%C0%EFP%BB4%2F%FB%C6%60%3D%CE%2A%09%27%60%40F%CENG%3E%F5%AA%10%F8%CB0%2CT%AA%01%85%06%9C%AD%FB%B0OQP%EEc%2A%E0%1C%1E%BC%D4%AB%C2%05n%A0V%8B%60%EA%2Fl%9AP%09%E4%D2%7F%09%CF%23%B5%0As%C6%2A%D1%2C~%07ZojL%F6%14%0E%075b%0Cq%CD%27J%5E%BDi%A7%A5%02%06%609%F4%A6n%DC%28%C6A%A1%17%14%00g%8Ai%A0%FD%EAF4%00QM%CD%14%01%FF%D9'
        };
        $scope.images.push(img);
        //
        $http({
            method: 'GET',
            url: '/images'
        }).
        success(function(data){
            console.log(data);
        });

        /*
        Image.query(function(images) {
            //$scope.images = images;
            $scope.images = [];
        });
        */
    };

    $scope.findOne = function() {
        Image.get({
            imageId: $routeParams.imageId
        }, function(image) {
            $scope.image = image;
        });
    };
}]);