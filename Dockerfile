# 1️⃣ Build stage: compile the app
FROM eclipse-temurin:17-jdk-jammy AS build

# Set working directory
WORKDIR /app

# Copy Maven files
COPY pom.xml mvnw ./
COPY .mvn .mvn
RUN chmod +x mvnw

# Download dependencies (cache them)
RUN ./mvnw dependency:go-offline

# Copy source code
COPY src ./src

# Build the app
RUN ./mvnw clean package -DskipTests

# 2️⃣ Run stage: lightweight image
FROM eclipse-temurin:17-jre-jammy

# Set working directory
WORKDIR /app

# Copy built JAR from build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the Spring Boot port
EXPOSE 8080

# Run the JAR
ENTRYPOINT ["java", "-jar", "app.jar"]