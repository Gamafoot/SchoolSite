from flask import Flask, render_template, request
import sqlite3 as sql

app = Flask(__name__)
app.config.from_object(__name__)

conn = sql.connect('db.sqlite3')
conn.cursor().execute('SELECT * FROM teachers')
data = conn.cursor().fetchall()
print('ДАТАААААА',data)

@app.route('/', methods=['POST', 'GET'])
def main():
    if request.method == 'POST':
        number = request.form['comp_select']
    
    #----------------------------------------#

    data = {
        # 'class': number,
    }
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)