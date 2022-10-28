FROM python:3.9.15-buster

RUN python -m pip install --upgrade pip setuptools
RUN pip install sqlite-web

VOLUME /db
WORKDIR /db

EXPOSE 8080

ENTRYPOINT ["sqlite_web", "--host=0.0.0.0", "--port=8080", "--no-browser"]
