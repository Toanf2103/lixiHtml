function save(phanThuong){
    alert(phanThuong);
    
    xml = new XMLHttpRequest();
    
    {
        xml.onreadystatechange = function() {
            if (xml.readyState == 4){
                
                 alert(xml.responseText);
                
                        
                // el = document.querySelector('tbody');
                // el.innerHTML=xml.responseText;          
            }
            
        }   
        url = 'https://toanf2103.000webhostapp.com/xuly.php?actAjax=lixi&lixi='+$phanThuong; 
        alert(url)     
        xml.open("GET", url, "false");
        xml.send();
    }


}