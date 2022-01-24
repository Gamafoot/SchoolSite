from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)
app.config.from_object(__name__)

def execute(sql, all = True):
    conn = sqlite3.connect('db.sqlite3', check_same_thread=False)
    cur = conn.cursor()
    cur.execute('SELECT fio, text, photo FROM teachers')

    if all == True:
        data = cur.fetchall()
    else:
        data = cur.fetchone()

    conn.close()
    return data

@app.route('/', methods=['POST', 'GET'])
def main():
    number = '1'
    if request.method == 'POST':
        number = request.form['comp_select']
    
    #----------------------------------------#
    data_teachers = execute('SELECT fio, discription, photo FROM teachers')
    print(data_teachers)
    data = {
        'class': number,
        'data_t': data_teachers,
    }
    return render_template('index.html', data = data)

@app.route('/news')
def news():
    return render_template('news.html')

@app.route('/news-detail-<num>')
def detail(num):
    return render_template('detail.html')
if __name__ == '__main__':
    app.run(debug=True)