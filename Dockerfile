FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

COPY . .


RUN chmod +x GenshinSeiibutsuChecker/mvnw
RUN cd GenshinSeiibutsuChecker && ./mvnw clean install -DskipTests

CMD ["sh", "-c", "java -jar GenshinSeiibutsuChecker/target/*.jar"]