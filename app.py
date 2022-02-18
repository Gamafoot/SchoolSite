from operator import index
from flask import Flask, render_template
from DataBase import DataBase
import os

app = Flask(__name__)
app.config.from_object(__name__)

db = DataBase()

@app.route('/', methods=['POST', 'GET'])
def main():
    data_teachers = db.getData('SELECT fio, text, photo FROM teachers', 'all')
    
    #Filling massiv
    gallery = []
    path = os.path.dirname(__file__) + '\static\img\gallery'
    index = 0
    for folder_name in os.listdir(path):
        for post_name in os.listdir(path+'\\'+folder_name):
            gallery.append({
                'title':post_name,
                'date':folder_name,
                'photos':[]
            })
            for file_name in os.listdir(path+'\\'+folder_name+'\\'+post_name):
                gallery[index]['photos'].append(folder_name+'/'+post_name+'/'+file_name)
            index += 1
    #Sort
    for main_el in range(len(gallery)):
        for other_el in range(len(gallery)):
            if gallery[other_el]['date'] > gallery[main_el]['date']:
                gallery[other_el]['date'],gallery[main_el]['date'] = gallery[main_el]['date'], gallery[other_el]['date']
    
    return render_template('index.html', data_teachers = data_teachers, data_gallery = gallery)

@app.route('/news')
def news():
    return render_template('news.html')

@app.route('/news-detail-<num>')
def detail(num):
    return render_template('detail.html')

@app.route('/test')
def test():
    return render_template('test.html')
if __name__ == '__main__':
    app.run(debug=True)