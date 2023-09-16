from kivy.app import App
from kivy.uix.switch import Switch
from kivy.uix.label import Label
from kivy.uix.gridlayout import GridLayout


class armanApp(App):
    def buid(self):
        gl = GridLayout(rows=2)
        s = Switch()
        l = Label(text='asdfghjkl;')
        gl.add_widget(s)
        gl.add_widget(l)
        return gl


armanApp().run()
