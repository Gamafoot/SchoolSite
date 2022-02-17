import sqlite3

class DataBase():
    __connection = None
    
    def __init__(self):
        self.__connect_db()
    
    def __connect_db(self):
        try:
            self.__connection = sqlite3.connect('db.sqlite3', check_same_thread=False)
            return True
        except Exception as ex:
            print(":::Ошибка при подключении к базе данных:::",ex)
            return False
    
    def addUser(self, name, password):
        try:
            cursor = self.__connection.cursor()
            cursor.execute(f'INSERT INTO admin (login,password) VALUES ("{name}","{password}")')
            self.__connection.commit()
            cursor.close()
            return True
        except Exception as ex:
            cursor.close()
            self.closeDataBase()
            print(":::Ошибка при добавлении пользователя:::",ex)
            return False
    
    def getHash(self, name):
        try:
            cursor = self.__connection.cursor()
            cursor.execute(f'SELECT login, password FROM admin WHERE login = "{name}"')
            user = cursor.fetchone()
            if user != None:
                cursor.close()
                return user[1]
        except Exception as ex:
            cursor.close()
            self.closeDataBase()
            print(":::Ошибка при взятии хеша:::",ex)
            return False
        
    def hasUser(self, name):
        try:
            cursor = self.__connection.cursor()
            cursor.execute(f'SELECT login FROM admin WHERE login="{name}"')
            cursor.close()
            return True
        except Exception as ex:
            cursor.close()
            self.closeDataBase()
            print(":::Ошибка при проверки наличия пользователя в базе:::",ex)
            return False
        
    def getData(self, execute:str, mode = 'one'):
        try:
            cursor = self.__connection.cursor()
            cursor.execute(execute)
            data = None
            
            if mode == 'one':
                data = cursor.fetchone()
            elif mode == 'all':
                data = cursor.fetchall()
            elif mode == 'many':
                data = cursor.fetchmany()
                
            cursor.close()
                
            return data
        except Exception as ex:
            cursor.close()
            self.closeDataBase()
            print(":::Ошибка при получении данных из базы:::",ex)
            return None
        
    def closeDataBase(self):
        if self.__connection != None:
            self.__connection.commit()
            self.__connection.close()