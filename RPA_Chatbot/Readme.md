IF YOU HAVE PYTHON INSTALLED ON YOUR PC :

1. Double-click on the Run.bat file.
2. Open your default Browser and search 'http://localhost:8000/Index.html'. 


OR


OPEN THE WEBSITE VIA :

1. Press 'Windows Key + S' and search 'cmd' and select 'Run as Administrator'.
2. Change the directory to RPA_Chatbot folder
3. Copy the below text inside the quotes & paste it in cmd & then Press 'Enter':
   'netsh advfirewall firewall add rule name="RPACHATBOT8000" dir=in action=allow protocol=TCP localport=8000'
4. Open your default Browser and search 'http://localhost:8000/Index.html'
5. Execute the operation on the website by typing in any of the below listed questions on the website.
6. When finished, Copy the below text inside the quotes & paste it in cmd & then Press 'Enter' in order to delete the local server:
   'netsh advfirewall firewall delete rule name="RPACHATBOT8000" protocol=TCP localport=8000'
