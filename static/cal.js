document.addEventListener("DOMContentLoaded", function(event) {
    
    var firstYear=1900;
    var fest = [
        /* szezonvaltasok napjai; elso elem (0-s index) = februar! */
        [4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 1900 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1901 */
        [5, 6, 6, 6, 7, 8, 8, 8, 9, 8, 8, 6], /* 1902 */
        [5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8, 7], /* 1903 */
        [5, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 1904 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1905 */
        [5, 6, 6, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1906 */
        [5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8, 7], /* 1907 */
        [5, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 1908 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1909 */
        [5, 6, 6, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1910 */
        [5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8, 7], /* 1911 */
        [5, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 1912 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1913 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1914 */
        [5, 6, 6, 6, 7, 8, 8, 9, 9, 8, 8, 6], /* 1915 */
        [5, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7, 6], /* 1916 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7, 6], /* 1917 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1918 */
        [5, 6, 6, 6, 7, 8, 8, 9, 9, 8, 8, 6], /* 1919 */
        [5, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7, 6], /* 1920 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 9, 7, 6], /* 1921 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1922 */
        [5, 6, 6, 6, 7, 8, 8, 9, 9, 8, 8, 6], /* 1923 */
        [5, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7, 6], /* 1924 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7, 6], /* 1925 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1926 */
        [5, 6, 6, 6, 7, 8, 8, 8, 9, 8, 8, 6], /* 1927 */
        [5, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7, 6], /* 1928 */
        [4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 1929 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1930 */
        [5, 6, 6, 6, 7, 8, 8, 8, 9, 8, 8, 6], /* 1931 */
        [5, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7, 6], /* 1932 */
        [4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 1933 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1934 */
        [5, 6, 6, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1935 */
        [5, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7, 6], /* 1936 */
        [4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 1937 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1938 */
        [5, 6, 6, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1939 */
        [5, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7, 6], /* 1940 */
        [4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 1941 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1942 */
        [5, 6, 6, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1943 */
        [5, 6, 5, 5, 6, 7, 8, 8, 8, 7, 7, 6], /* 1944 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7, 6], /* 1945 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1946 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1947 */
        [5, 5, 5, 5, 6, 7, 7, 8, 8, 7, 7, 5], /* 1948 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7, 6], /* 1949 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1950 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1951 */
        [5, 5, 5, 5, 6, 7, 7, 8, 8, 7, 7, 5], /* 1952 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7, 6], /* 1953 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7, 6], /* 1954 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1955 */
        [5, 5, 5, 5, 6, 7, 7, 8, 8, 7, 7, 5], /* 1956 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7, 6], /* 1957 */
        [4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 1958 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1959 */
        [5, 5, 5, 5, 6, 7, 7, 7, 8, 7, 7, 5], /* 1960 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7, 6], /* 1961 */
        [4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 1962 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1963 */
        [5, 5, 5, 5, 6, 7, 7, 7, 8, 7, 7, 5], /* 1964 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7, 6], /* 1965 */
        [4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 1966 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1967 */
        [5, 5, 5, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 1968 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7, 6], /* 1969 */
        [4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 1970 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1971 */
        [5, 5, 5, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 1972 */
        [4, 6, 5, 5, 6, 7, 8, 8, 8, 7, 7, 6], /* 1973 */
        [4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 1974 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1975 */
        [5, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 1976 */
        [4, 6, 5, 5, 6, 7, 7, 8, 8, 7, 7, 6], /* 1977 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7, 6], /* 1978 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1979 */
        [5, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 1980 */
        [4, 6, 5, 5, 6, 7, 7, 8, 8, 7, 7, 6], /* 1981 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7, 6], /* 1982 */
        [4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8, 6], /* 1983 */
        [4, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 1984 */
        [5, 5, 5, 5, 5, 8, 7, 7, 8, 7, 7, 5], /* 1985 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7, 6], /* 1986 */
        [4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 1987 */
        [4, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 1988 */
        [5, 5, 5, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 1989 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7, 6], /* 1990 */
        [4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 1991 */
        [4, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 1992 */
        [5, 5, 5, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 1993 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7, 6], /* 1994 */
        [4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 1995 */
        [4, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 1996 */
        [5, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 1997 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7, 6], /* 1998 */
        [4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 1999 */
        [4, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2000 */
        [4, 5, 5, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2001 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7, 6], /* 2002 */
        [4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 2003 */
        [4, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2004 */
        [4, 5, 5, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2005 */
        [4, 6, 5, 5, 6, 7, 7, 8, 8, 7, 7, 6], /* 2006 */
        [4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7, 6], /* 2007 */
        [4, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2008 */
        [4, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2009 */
        [4, 6, 5, 5, 6, 7, 7, 8, 8, 7, 7, 6], /* 2010 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7, 6], /* 2011 */
        [4, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2012 */
        [4, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2013 */
        [4, 6, 5, 5, 6, 7, 7, 8, 8, 7, 7, 6], /* 2014 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7, 6], /* 2015 */
        [4, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2016 */
        [3, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2017 */
        [4, 5, 5, 5, 6, 7, 7, 8, 8, 7, 7, 5], /* 2018 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7, 6], /* 2019 */
        [4, 5, 4, 5, 5, 6, 7, 7, 8, 7, 7, 5], /* 2020 */
        [3, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2021 */
        [4, 5, 5, 5, 6, 7, 7, 7, 8, 7, 7, 5], /* 2022 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7, 6], /* 2023 */
        [4, 5, 4, 5, 5, 6, 7, 7, 8, 7, 6, 5], /* 2024 */
        [3, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2025 */
        [4, 5, 5, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2026 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7, 6], /* 2027 */
        [4, 5, 4, 5, 5, 6, 7, 7, 8, 7, 6, 5], /* 2028 */
        [3, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2029 */
        [4, 5, 5, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2030 */
        [4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7, 6], /* 2031 */
        [4, 5, 4, 5, 5, 6, 7, 7, 8, 7, 6, 5], /* 2032 */
        [3, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2033 */
        [4, 5, 5, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2034 */
        [4, 6, 5, 5, 6, 7, 7, 8, 8, 7, 7, 6], /* 2035 */
        [4, 5, 4, 5, 5, 6, 7, 7, 8, 7, 6, 5], /* 2036 */
        [3, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2037 */
        [4, 5, 5, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2038 */
        [4, 6, 5, 5, 6, 7, 7, 8, 8, 7, 7, 6], /* 2039 */
        [4, 5, 4, 5, 5, 6, 7, 7, 8, 7, 6, 5], /* 2040 */
        [3, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2041 */
        [4, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2042 */
        [4, 6, 5, 5, 6, 7, 7, 8, 8, 7, 7, 6], /* 2043 */
        [4, 5, 4, 5, 5, 6, 7, 7, 7, 7, 6, 5], /* 2044 */
        [3, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2045 */
        [4, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7, 5], /* 2046 */
        [4, 6, 5, 5, 6, 7, 7, 8, 8, 7, 7, 6], /* 2047 */
        [4, 5, 4, 5, 5, 6, 7, 7, 7, 7, 6, 5], /* 2048 */
        [3, 5, 4, 5, 5, 6, 7, 7, 8, 7, 7, 5]  /* 2049 */
    ];

    function date(year, month, day, hour){
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
    }

    // egi elemek
    var Gan = ["Fa","fa","T\u0171z","t\u0171z","F\u00f6ld","f\u00f6ld","F\u00e9m","f\u00e9m","V\u00edz","v\u00edz"];
    // foldi elemek
    var Zhi = ["patk\u00e1ny","bivaly","tigris","ny\u00fal","s\u00e1rk\u00e1ny","k\u00edgy\u00f3","l\u00f3","kecske","majom","kakas","kutya","diszn\u00f3"];
    // foldi elemek atszamolasa egi elemre: Viz, fold, Fa, fa, Fold, tuz, Tuz, fold, Fem, fem, Fold, viz.
    var foldibol_egi = [ 8, 5, 0, 1, 4, 3, 2, 5, 6, 7, 4, 9 ];
    var Time = ["fel\u00e1ll\u00edt\u00f3d\u00e1s","gy\u00f6k\u00e9rtelen\u00edt\u00e9s","tel\u00edt\u0151d\u00e9s","kiegyenl\u00edt\u0151d\u00e9s","elhat\u00e1roz\u00e1s","visszatart\u00e1s","\u00e1tt\u00f6r\u00e9s","vesz\u00e9ly","beteljesed\u00e9s","begy\u0171jt\u00e9s","megny\u00edl\u00e1s","bez\u00e1r\u00f3d\u00e1s"];
    var HonapNev = ["","janu\u00e1r","febru\u00e1r","m\u00e1rcius","\u00e1prilis","m\u00e1jus","j\u00fanius","j\u00falius","augusztus","szeptember","okt\u00f3ber","november","december"];
    var daysInMonth = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    var daysInMonthLeap = [ 0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    
    function leftpad(num) {
        if (num < 10)
            return "0" + num;
        else
            return "" + num;
    }

    function img(mi, szam) {
        return "<img src=\"static/" + mi + leftpad(szam) + ".png\" width=\"20\" height=\"20\">";
    }

    function ganzhi_kep(gan, zhi) {
        return img("gan", gan+1) + img("zhi", zhi+1);
    }

    function ganzhi_felirat(gan, zhi) {
        return Gan[gan] + " " + Zhi[zhi];
    }

    function ido_kep(zhi) {
        return img("time", (zhi.day - zhi.month + 24) % 12 + 1);
    }

    function ido_felirat(zhi) {
        return Time[(zhi.day - zhi.month + 24) % 12];
    }

    function LeapYear(y) {
        return ((y%4==0) && (y%100!=0)) || (y%400==0);
    }

    function jiefest(solar) {
        // -2 mert a februar az elso a tombben
        return fest[solar.year-firstYear][(solar.month-2+12)%12]==solar.day;
    }

    // lepteti egy evvel a gan-zhi szamlalokat
    function yearplus(solar, gan, zhi) {
        // az atugrott ev hossza
        var days = LeapYear(solar.year) ? 366 : 365;
        gan.year += 1;       // 1 ev, ez egyertelmu
        zhi.year += 1;
        gan.month += 12;     // mivel a szezonok is 1 honaposak, ez fixen ennyi
        zhi.month += 12;
        gan.day += days;     // evben eltelt napok szamatol fugg
        zhi.day += days;
        gan.hour += days*12; // 12 db ketoras egyseg egy nap
        zhi.hour += days*12;

        solar.year += 1;
    }
    
    function monthplus(solar, gan, zhi) {
        // az atugrott honap hossza
        var days = LeapYear(solar.year) ? daysInMonthLeap[solar.month] : daysInMonth[solar.month];
        gan.month += 1;          // pont 1 szezont lepunk, mert az 1 honap
        zhi.month += 1;
        if (solar.month == 2) {  // ha most februar, akkor kinai ujevet ugrunk
            gan.year += 1;
            zhi.year += 1;
        }
        gan.day += days;         // ennyi napot leptunk
        zhi.day += days;
        gan.hour += days*12;     // 12 db ketoras egyseg egy nap
        zhi.hour += days*12;

        solar.month += 1;
    }

    //mindharom parameter date tipusu
    //hoursplus: az orakat is leptesse-e, tehat egy napot leptunk, vagy csak
    //a "23:00 mar kovetkezo nap" miatt lett meghivva
    function dayplus(solar, gan, zhi, hoursplus) {
        // szandekosan elobb kell novelni, mert a lenti jiefest akkor mukodik jol
        solar.day += 1;

        gan.day += 1;         // 1-et ugrik a nap
        zhi.day += 1;

        // ha belefutunk egy szezonvaltasba...
        if (jiefest(solar)) {
            gan.month += 1;
            zhi.month += 1;
            // raadasul ha ez februari szezonvaltas, akkor uj ev is jon
            if (solar.month == 2) {
                gan.year += 1;
                zhi.year += 1;
            }
        }
        
        if (hoursplus) {
            gan.hour += 12;       // ezek kozben ennyit ugranak; 12 db ketoras egyseg egy nap
            zhi.hour += 12;
        }
    }
    
    function hourplus(solar, gan, zhi) {
        solar.hour += 1;
        if (solar.hour % 2 == 1) {      // ha paratlan lett, valt
            gan.hour += 1;
            zhi.hour += 1;
        }
    }

    function computedate(tocheck) {
        var solar = new date(1901, 1, 1, 0);  // innen indulunk
        var gan = new date(6, 4, 5, 0);       // es az a datum egy Fem Fold fold Fa
        var zhi = new date(0, 0, 3, 0);       // illetve patkany patkany nyul patkany

        // ev, honap, nap, ora belovese
        while (solar.year != tocheck.year) {
            yearplus(solar, gan, zhi);
        }
        while (solar.month != tocheck.month) {
            monthplus(solar, gan, zhi);
        }
        while (solar.day != tocheck.day) {
            dayplus(solar, gan, zhi, true);
        }
        while (solar.hour != tocheck.hour) {
            hourplus(solar, gan, zhi);
        }
        // ha 23 ora, akkor az mar a kovetkezo napnak szamit, de az orak nem ugranak
        if (solar.hour == 23) {
            dayplus(solar, gan, zhi, false);
        }

        // modulok, egi 10, foldi 12
        gan.year %= 10;
        gan.month %= 10;
        gan.day %= 10;
        gan.hour %= 10;
        zhi.year %= 12;
        zhi.month %= 12;
        zhi.day %= 12;
        zhi.hour %= 12;

        return {
            gan: gan,
            zhi: zhi
        };
    }

    function printnap(ev, honap, nap, ora) {
        var solar = new date(ev, honap, nap, ora);
        var computed = computedate(solar);
        var gan = computed.gan;
        var zhi = computed.zhi;

        document.getElementById("edatum").innerHTML = ev + "." + leftpad(honap) + "." + leftpad(nap) + ". " + leftpad(ora) + "h";
        document.getElementById("eev").innerHTML = ganzhi_kep(gan.year, zhi.year) + "<br>" + ganzhi_felirat(gan.year, zhi.year);
        document.getElementById("ehonap").innerHTML = ganzhi_kep(gan.month, zhi.month) + "<br>" + ganzhi_felirat(gan.month, zhi.month);
        document.getElementById("enap").innerHTML = ganzhi_kep(gan.day, zhi.day) + "<br>" + ganzhi_felirat(gan.day, zhi.day);
        document.getElementById("eora").innerHTML = ganzhi_kep(gan.hour, zhi.hour) + "<br>" + ganzhi_felirat(gan.hour, zhi.hour);

        var mennyi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        mennyi[gan.year]++;
        mennyi[gan.month]++;
        mennyi[gan.day]++;
        mennyi[gan.hour]++;
        mennyi[foldibol_egi[zhi.year]]++;
        mennyi[foldibol_egi[zhi.month]]++;
        mennyi[foldibol_egi[zhi.day]]++;
        mennyi[foldibol_egi[zhi.hour]]++;
        for (var i=0; i<10; i+=2) {
            document.getElementById("osszeg" + i).innerHTML = mennyi[i];
            document.getElementById("osszeg" + (i+1)).innerHTML = mennyi[i+1];
        }
    }

    function printnaptar(ev, honap, nap, ora) {
        function addrowtotable(table, numcells) {
            var row = table.insertRow(-1);
            var cells = [];
            for (var n=0; n < numcells; n++)
                cells[n] = row.insertCell(-1);
            return cells;
        }

        // tablazat sorai
        var tbody = document.getElementById("naptarbody");
        while (tbody.rows.length!=0)
            tbody.deleteRow(0);

        // azert month-1 mert a javascript-ben 0-tol szamozodnak a honapok
        var ts = new Date(ev, honap-1, 1, 12, 0, 0, 0);
        // het napja, hetfo=0 kezdesre atirva
        var dow = ts.getDay() - 1;
        if (dow == -1)
            dow = 6;

        // deli idopontban nezunk minden napot, elsejetol indulunk
        // elsejetol vegig induljunk a napokon
        var solar = new date(ev, honap, 1, 12);
        var cells = addrowtotable(tbody, 7);

        var daysInThisMonth = LeapYear(ev) ? daysInMonthLeap[honap] : daysInMonth[honap];
        for (var n = 1; n <= daysInThisMonth; n++) {
            var solar = new date(ev, honap, n, 12);
            var computed = computedate(solar);
            var gan = computed.gan;
            var zhi = computed.zhi;
            var cell = cells[dow];
            cell.innerHTML = '<span class="nap">' + solar.day + '<\/span> ' + ganzhi_kep(gan.day, zhi.day) + ' ' + ido_kep(zhi) + '<br>' + ganzhi_felirat(gan.day, zhi.day) + '<br>' + ido_felirat(zhi);
            if (n == nap)
                cell.className = "aznapi";
            if (dow==5 || dow==6)
                cell.className+=" hetvege";
            if (jiefest(solar))
                cell.className+=" szezonvaltas";

            dow++;
            if (dow == 7 && n != daysInMonth) {
                // vasarnap utan uj sor, ha nem ez volt az utolso nap
                cells = addrowtotable(tbody, 7);
                dow = 0;
            }
        }

        // naptar cimsora
        document.getElementById("naptarcaption").innerHTML = ev + ". " + HonapNev[honap];
        // honap adatai
        var eleje = new date(ev, honap, 1, 12);
        var computed = computedate(eleje);
        document.getElementById("honapeleje").innerHTML = ganzhi_kep(computed.gan.month, computed.zhi.month) + " " + ganzhi_felirat(computed.gan.month, computed.zhi.month);
        // eddigre biztos volt szezonvaltas
        var kozepe = new date(ev, honap, 15, 12);
        var computed = computedate(kozepe);
        document.getElementById("honapkozepe").innerHTML = ganzhi_kep(computed.gan.month, computed.zhi.month) + " " + ganzhi_felirat(computed.gan.month, computed.zhi.month);
    }


    function naptarszamol() {
        var ev = parseInt(document.getElementById("ev").value);
        var honap = parseInt(document.getElementById("honap").value);
        var nap = parseInt(document.getElementById("nap").value);
        var ora = parseInt(document.getElementById("ora").value);

        printnaptar(ev, honap, nap, ora);
        printnap(ev, honap, nap, ora);
    }

    var today = new Date();
    document.getElementById("ev").value = today.getFullYear();
    document.getElementById("honap").value = today.getMonth()+1;
    document.getElementById("nap").value = today.getDate();
    document.getElementById("ora").value = today.getHours();
    naptarszamol();

    var inputs = document.querySelectorAll('fieldset input');
    for (var i = 0; i < inputs.length; ++i)
        inputs[i].addEventListener('change', naptarszamol);
    
});
